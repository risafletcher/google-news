# google-news
An RSS scraper for Google News.

## Installation
```npm i google-news --save```

## Usage

### Search 

```
const googleNews = require('google-news');

//  Get top stories from the Google News homepage
const topStories = await googleNews.search();

//  Get top stories by country & language
const topStoriesCN = await googleNews.search({ cc: 'CN', lc: 'zh' });
//  You can also search by country name and/or language
const topStoriesCA = await googleNews.search({ country: 'Canada' });

//  Search by keywords
const marthaStewartStories = await googleNews.search({ q: 'Martha Stewart' });
```

### Topics
```
const googleNews = require('google-news');

//  Get available topics
const topics = await googleNews.getTopics();

//  Get stories by topic
const entertainmentStories = await googleNews.searchByTopic({ topic: 'entertainment' });

//  If you happen to know the Google News topic Id, you can provide that
const businessStories = await googleNews.searchByTopic({
    topicId: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB',
});

//  As with regular search, you area also able to search by country and language
const businessCanada = await googleNews.search({
    topic: 'business',
    country: 'Canada',
    lc: 'en',
});
```