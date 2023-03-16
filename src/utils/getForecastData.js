const getForecast = (url, currentForecast) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            currentForecast({
                cityName: data.location.name,
                date: data.forecast.forecastday[0].date,
                countryName: data.location.country,
                temperatureC: data.current.temp_c,
                temperatureF: data.current.temp_f,
                icon: data.forecast.forecastday[0].day.condition.icon,
                airQuality: data.current.air_quality.co,
                precipitationIN: data.current.precip_in,
                precipitationMM: data.current.precip_mm,
                windKMH: data.current.wind_kph,
                windMPH: data.current.wind_mph,
                pressureIN: data.current.pressure_in,
                pressureMB: data.current.pressure_mb,
                visibilityKM: data.current.vis_km,
                visibilityMILES: data.current.vis_miles,
                uvIndex: data.current.uv,
                feelsLikeC: data.current.feelslike_c,
                feelsLikeF: data.current.feelslike_f,
                highestTemperatureC: data.forecast.forecastday[0].day.maxtemp_c,
                highestTemperatureF: data.forecast.forecastday[0].day.maxtemp_f,
                lowestTemperatureC: data.forecast.forecastday[0].day.mintemp_c,
                lowestTemperatureF: data.forecast.forecastday[0].day.mintemp_f,
                moonPhase: data.forecast.forecastday[0].astro.moon_phase,
                nextDaysArray: data.forecast.forecastday,
                distanceKM: data.forecast.forecastday[0].day.avgvis_km,
                distanceMILES: data.forecast.forecastday[0].day.avgvis_miles,
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
                    highestTemperatureC: data.forecast.forecastday[0].day.maxtemp_c,
                    highestTemperatureF: data.forecast.forecastday[0].day.maxtemp_f,
                    lowestTemperatureC: data.forecast.forecastday[0].day.mintemp_c,
                    lowestTemperatureF: data.forecast.forecastday[0].day.mintemp_f,
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
