const getForecast = (url, currentForecast) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            currentForecast({
                cityName: data.location.name,
                date: data.forecast.forecastday[0].date,
                countryName: data.location.country,
                temperature: data.current.temp_c,
                icon: data.forecast.forecastday[0].day.condition.icon,
                airQuality: data.current.air_quality.co,
                precipitation: data.current.precip_in,
                wind: data.current.precip_in,
                pressure: data.current.pressure_mb,
                visibility: data.current.vis_km,
                uvIndex: data.current.uv,
                feelsLike: data.current.feelslike_c,
                highestTemperature: data.forecast.forecastday[0].day.maxtemp_c,
                lowestTemperature: data.forecast.forecastday[0].day.mintemp_c,
                moonPhase: data.forecast.forecastday[0].astro.moon_phase,
                nextDaysArray: data.forecast.forecastday,
                distance: data.forecast.forecastday[0].day.avgvis_km,
            });
        })
        .catch((error) => console.log(error.message));
};

const getHistoryForecast = (url, setArr) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setArr((arr) => [
                ...arr,
                {
                    name: data.location.name,
                    id: data.forecast.forecastday[0].date_epoch,
                    date: data.forecast.forecastday[0].date,
                    icon: data.forecast.forecastday[0].day.condition.icon,
                    highestTemperature: data.forecast.forecastday[0].day.maxtemp_c,
                    lowestTemperature: data.forecast.forecastday[0].day.mintemp_c,
                    description: data.forecast.forecastday[0].day.condition.text,
                }
            ]);
        })
        .catch((error) => console.log(error.message));
};

module.exports = {
    getForecast,
    getHistoryForecast
};
