const getCurrentDate = () => {
    const date = new Date();
    return date;
};

const getConvertedDate = (currentDay) => {
    const year = currentDay.getFullYear();
    const month = currentDay.getMonth() + 1; // we increment by 1 because January has index 0
    const day = currentDay.getDate();
    const convertedDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    return convertedDate;
};

const getLastDays = (currentDay, daysNumber) => {
    const lastDaysArr = [];
    const year = currentDay.getFullYear();
    const month = currentDay.getMonth() + 1; // we increment by 1 because January has index 0
    const day = currentDay.getDate();

    for (let i = 1; i < daysNumber + 1; i++) { // we set i = 1 because we don't want to render our current day
        const prevDay = new Date(year, month, day - i);

        // if the month is february, we set day to be 28
        if (prevDay.getMonth() === 2 && prevDay.getDate() > 28) {
            prevDay.setDate(28);
        }

        const convertedDate = `${prevDay.getFullYear()}-${prevDay.getMonth() < 10 ? `0${prevDay.getMonth()}` : prevDay.getMonth()}-${prevDay.getDate() < 10 ? `0${prevDay.getDate()}` : prevDay.getDate()}`;
        lastDaysArr.push(convertedDate);
    }
    return lastDaysArr;
};

module.exports = {
    getCurrentDate,
    getConvertedDate,
    getLastDays
}
