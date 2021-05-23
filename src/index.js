const axios = require('axios');
const getLocalCodes = require('./utils/getLocaleCodes');
const parseResults = require('./utils/parseResults');
const topics = require('../utils/topics');

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
    topic,
    topicId,
    country,
    language,
    cc = 'us',
    lc = 'en',
} = {}) {
    const topicId = topicId || topics[topic];
    if (!topics[topic]) {
        throw new Error(`${topic} is not a valid topic. Please use getTopics() to get all valid topics.`);
    }
    const localeCodes = getLocalCodes({ country, language, cc, lc });
    const response = await axios.get(
        `https://news.google.com/rss/topic/${topicId}`,
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

module.exports = {
    search,
    getTopics,
    searchByTopic,
}