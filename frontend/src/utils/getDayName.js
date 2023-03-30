const getDayName = (dateString, localeLanguage) => {
    let date = new Date(dateString);
    return date.toLocaleDateString(localeLanguage, { weekday: 'long' });
};

module.exports = {
    getDayName
};
