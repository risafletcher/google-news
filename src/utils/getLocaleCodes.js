const locale = require('locale-codes');

const getCodesFromTag = (tag) => {
    const [languageCode, countryCode] = tag.split('-');
    return { lc: languageCode, cc: countryCode };
}

module.exports = function getLocaleCodes({ country, language, cc, lc } = {}) {
    if (cc && lc) {
        return { cc, lc };
    } else if (lc) {
        const tag = locale.getByISO6391(lc).tag;
        return getCodesFromTag(tag);
    } else if (country) {
        const tag = locale.getByLocation(lc).tag;
        return getCodesFromTag(tag);
    } else if (language) {
        const tag = locale.getByName(lc).tag;
        return getCodesFromTag(tag);
    } else {
        return null;
    }
}