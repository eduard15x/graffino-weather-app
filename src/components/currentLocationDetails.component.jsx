import AirCardInfo from "./airCardInfo";

const CurrentLocationDetails = ({ userSettings, currentDate, currentForecast }) => {
    return (
        <div className="current-location-details-container">
            <div className="weather-info">
			    <h1 className="weather-info--heading">{currentForecast.cityName}, {currentForecast.countryName}</h1>

                <div className="weather-info__group">
                    <img className="weather-info__group--icon" src={ currentForecast.icon } alt="Weather icon"/>
                    <div className="group-temp">
                        <p className="group-temp--value">{ userSettings.temperature ? Math.round(currentForecast.temperatureC) : Math.round(currentForecast.temperatureF) }°</p>
                        <p className="group-temp--text">
                            Feels like: <br />
                            { userSettings.temperature ? Math.round(currentForecast.feelsLikeC) : Math.round(currentForecast.feelsLikeF) }°
                        </p>
                    </div>
                    <p className="group-units">
                        <span className={ userSettings.temperature ? 'bold' : '' }>°F</span>
                        <span className={ !userSettings.temperature ? 'bold' : '' }>°C</span>
                    </p>
                    <p className="group-limits">
                        <span>H: { userSettings.temperature ? currentForecast.highestTemperatureC : currentForecast.highestTemperatureF }°</span>
                        <span>L: { userSettings.temperature ? currentForecast.lowestTemperatureC : currentForecast.highestTemperatureF }°</span>
                    </p>
                </div>
            </div>

            <div className="additional-info-list">
                <AirCardInfo
                    property='Air Quality'
                    value={ isNaN(Math.round(currentForecast.airQuality)) ? '' : Math.round(currentForecast.airQuality) }
                    details='Good'
                />
                <AirCardInfo
                    property='Precipitation'
                    value={ userSettings.precipitation ? currentForecast.precipitationIN : currentForecast.precipitationMM }
                    details=''
                    condition={ userSettings.precipitation }
                    firstValue='mm'
                    secondValue='in'
                />
                <AirCardInfo
                    property='Wind'
                    value={ userSettings.wind ? currentForecast.windMPH : currentForecast.windKMH }
                    details=''
                    condition={ userSettings.wind }
                    firstValue='mph'
                    secondValue='kmh'
                />
                <AirCardInfo
                    property='Pressure'
                    value={ userSettings.pressure ? currentForecast.pressureIN : currentForecast.pressureMB }
                    details=''
                    condition={ userSettings.pressure }
                    firstValue='in'
                    secondValue='mb'
                />
                <AirCardInfo
                    property='Visibility'
                    value={ userSettings.visibility ? currentForecast.visibilityKM : currentForecast.visibilityMILES }
                    details=''
                    condition={ userSettings.visibility }
                    firstValue='km'
                    secondValue='mi'
                />
                <AirCardInfo
                    property='UV Index'
                    value={ currentForecast.uvIndex }
                    details='High'
                />
            </div>

            <div className="astro-info">
                <div className="astro-info__circle">
                    <div className="astro-info__circle--bullets b-large"></div>
                    <div className="astro-info__circle--bullets b-medium"></div>
                    <div className="astro-info__circle--bullets b-small b-small--first"></div>
                    <div className="astro-info__circle--bullets b-small b-small--second"></div>
                    <div className="astro-info__circle--bullets b-small b-small--third"></div>
                </div>
                <p className="astro-info__heading">{ currentDate.toLocaleString('default', {month: 'long', day: 'numeric', year: 'numeric'}) }</p>
                <p className="astro-info__moonphase">Phase: <span>{ currentForecast.moonPhase }</span></p>
                <p className="astro-info__visibility">Visibility: <span>{ userSettings.visibility ? currentForecast.visibilityKM + ' km' : currentForecast.visibilityMILES + ' miles' }</span></p>
                <p className="astro-info__distance">Distance: <span>{ userSettings.visibility ? currentForecast.distanceKM + ' km' : currentForecast.distanceKM + ' miles'}</span></p>
            </div>
        </div>
    )
};

export default CurrentLocationDetails;
