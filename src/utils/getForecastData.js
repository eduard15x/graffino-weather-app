const getForecast = (url, setLocation, setLocationTemperature, setLocationFutureForecast) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setLocation(data.location.name);
            setLocationTemperature(data.forecast.forecastday[0].day.avgtemp_c);
            setLocationFutureForecast(data.forecast.forecastday);
        })
        .catch((error) => console.log(error.message))
        .finally(() => console.log('this executes last'));
};

const getHistoryForecast = (url) => {

};

module.exports = {
    getForecast,
    getHistoryForecast
};
