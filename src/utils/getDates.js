const getCurrentDate = () => {
    const date = new Date();
    return date;
};

const getConvertedDate = (currentDay) => {
    const y = currentDay.getFullYear();
    const m = currentDay.getMonth() + 1; // we increment by 1 because January has index 0
    const d = currentDay.getDate();
    const convertedDate = `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`;
    return convertedDate;
}

const getLast7Days = (currentDay, daysNR) => {
    const lastDaysArr = [];
    const y = currentDay.getFullYear();
    const m = currentDay.getMonth() + 1; // we increment by 1 because January has index 0
    const d = currentDay.getDate();

    for (let i = 1; i < daysNR + 1; i++) {
        const convertedDate = `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`;
        lastDaysArr.push(convertedDate);
    }
    return lastDaysArr;
};

module.exports = {
    getCurrentDate,
    getConvertedDate,
    getLast7Days
}
