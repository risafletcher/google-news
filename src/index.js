const axios = require('axios');
const getLocalCodes = require('./utils/getLocaleCodes');
const parseResults = require('./utils/parseResults');
const topics = require('./utils/topics');

async function search({
    q,
    country,
    language,
    cc = 'us',
    lc = 'en',
} = {}) {
    const localeCodes = getLocalCodes({ country, language, cc, lc });
    const response = await axios.get(
        'https://news.google.com/rss',
        {
            params: {
                q,
                hl: localeCodes.lc,
                gl: localeCodes.cc,
                ceid: `${localeCodes.lc}:${localeCodes.cc}`,
            }
        }
    );
    return parseResults(response.data);
};

function getTopics() {
    return Object.keys(topics);
}

async function searchByTopic({
    topic = '',
    topicId,
    country,
    language,
    cc = 'us',
    lc = 'en',
} = {}) {
    const id = topicId || topics[topic.toLowerCase()];
    if (!topics[topic.toLowerCase()]) {
        throw new Error(`${topic} is not a valid topic. Please use getTopics() to get all valid topics.`);
    }
    const localeCodes = getLocalCodes({ country, language, cc, lc });
    const response = await axios.get(
        `https://news.google.com/rss/topics/${id}`,
        {
            params: {
                hl: localeCodes.lc,
                gl: localeCodes.cc,
                ceid: `${localeCodes.lc}:${localeCodes.cc}`,
            }
        }
    );
    return parseResults(response.data);
};

async function searchByGeoLocation({
	location,
	country,
	language,
	cc = 'us',
	lc = 'en',
}) {
    if (!location) {
        throw new Error('"location" is required and shold be the location\'s name, such as "Japan", or "DenverCo".');
    }
    const localeCodes = getLocalCodes({ country, language, cc, lc });
     const response = await axios.get(
				`https://news.google.com/rss/headlines/section/geo/${location}`,
				{
					params: {
						hl: localeCodes.lc,
						gl: localeCodes.cc,
						ceid: `${localeCodes.lc}:${localeCodes.cc}`,
					},
				}
			);
			return parseResults(response.data);   
}

module.exports = {
    search,
    getTopics,
    searchByTopic,
    searchByGeoLocation,
}