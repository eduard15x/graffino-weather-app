const CurrentLocationDetails = ({ currentDate, currentForecast }) => {
    return (
        <div className="current-location-details-container">
            <div className="weather-info">
			    <h1 className="weather-info--heading">{currentForecast.cityName}, {currentForecast.countryName}</h1>
                <div className="weather-info__group">
                    <img className="weather-info__group--icon" src={ currentForecast.icon } alt="Weather icon"/>
                    <div className="group-temp">
                        <p className="group-temp--value">{ currentForecast.temperature }°</p>
                        <p className="group-temp--text">
                            Feels like: <br />
                            <span className="group-temp--span">{ currentForecast.feelsLike }°</span>
                        </p>
                    </div>
                    <p className="group-units">
                        <span>F</span>
                        <span>C</span>
                    </p>
                    <p className="group-limits">
                        <span>H: { currentForecast.highestTemperature }°</span>
                        <span>L: { currentForecast.lowestTemperature }°</span>
                    </p>
                </div>
            </div>

            <div className="additional-info-list">
                <div className="additional-info-list__item">
                    <p className="additional-info-list__item--heading">Air Quality</p>
                    <p className="additional-info-list__item--value">{ isNaN(Math.round(currentForecast.airQuality)) ? '' : Math.round(currentForecast.airQuality) }</p>
                    <p className="additional-info-list__item--detail">Good</p>
                </div>
                <div className="additional-info-list__item">
                    <p className="additional-info-list__item--heading">Precipitation</p>
                    <p className="additional-info-list__item--value">{ currentForecast.precipitation }</p>
                    <p className="additional-info-list__item--detail">
                        <span>mm</span>
                        <span>in</span>
                    </p>
                </div>
                <div className="additional-info-list__item">
                    <p className="additional-info-list__item--heading">Wind</p>
                    <p className="additional-info-list__item--value">{ currentForecast.wind }</p>
                    <p className="additional-info-list__item--detail">
                        <span>mph</span>
                        <span>km</span>
                    </p>
                </div>
                <div className="additional-info-list__item">
                    <p className="additional-info-list__item--heading">Pressure</p>
                    <p className="additional-info-list__item--value">{ currentForecast.pressure }</p>
                    <p className="additional-info-list__item--detail">
                        <span>mb</span>
                        <span>in</span>
                    </p>
                </div>
                <div className="additional-info-list__item">
                    <p className="additional-info-list__item--heading">Visibility</p>
                    <p className="additional-info-list__item--value">{ currentForecast.visibility }</p>
                    <p className="additional-info-list__item--detail">
                        <span>km</span>
                        <span>mi</span>
                    </p>
                </div>
                <div className="additional-info-list__item">
                    <p className="additional-info-list__item--heading">UV Index</p>
                    <p className="additional-info-list__item--value">{ currentForecast.uvIndex }</p>
                    <p className="additional-info-list__item--detail">High</p>
                </div>
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
                <p className="astro-info__visibility">Visibility: <span>{ currentForecast.visibility }</span></p>
                <p className="astro-info__distance">Distance: <span>{ currentForecast.distance }</span></p>
            </div>
        </div>
    )
};

export default CurrentLocationDetails;
