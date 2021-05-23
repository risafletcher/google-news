const cheerio = require('cheerio');

module.exports = function parseResults(results) {
    const $ = cheerio.load(results, { xmlMode: true });
    const items = [];
    $('item').each((i, element) => {
        const description = $(element).find('description').text();
        const $relatedStories = cheerio.load(description);
        const relatedStories = [];
        $relatedStories('li').each((j, story) => {
            relatedStories.push({
                title: $(story).find('a').text(),
                url: $(story).find('a').attr('href'),
                source: $(story).find('font').text().trim(),
            })
        });
        relatedStories.pop();   // remove "View Full Coverage on Google News"
        items.push({
            guid: $(element).find('guid').text(),
            title: $(element).find('title').text().split(' - ')[0],
            source: {
                name: $(element).find('source').text(),
                url: $(element).find('source').attr('url'),
            },
            published: $(element).find('pubDate').text(),
            url: $(element).find('link').text(),
            relatedStories,
        })
    });
    return items;
};

