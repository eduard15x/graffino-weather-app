import SliderCarouselFuture from "./sliderCarouselFuture";

const FutureForecast = ({ userSettings, futureDaysArr, getDayName }) => {
    return (
        <div className="future-forecast-container">
            <h2 className="future-forecast-container__heading">5 days forecast</h2>
            {futureDaysArr ?
            <ul className="forecast-list forecast-list-largeview">
                {
                    futureDaysArr
                        .filter((item, index) => index > 0)
                        .map((item, index ) => {
                            return (
                                // eslint-disable-next-line
                                <li className="forecast-list__item" key={ index }>
                                    <p className="forecast-list__item--heading">{ getDayName(item.date, 'en-US') }</p>
									<img className="forecast-list__item--icon" src={ item.day.condition.icon } alt={ item.day.condition.text + ' icon' } />
									<p className="forecast-list__item--temperature">
										<span>H:{ !userSettings.temperature ? Math.round(item.day.maxtemp_c) : Math.round(item.day.maxtemp_f) }° </span>
										<span>L:{ !userSettings.temperature ? Math.round(item.day.mintemp_c) : Math.round(item.day.mintemp_f) }°</span>
									</p>
									<p className="forecast-list__item--condition">{ item.day.condition.text }</p>
                                </li>
                            );
                        })
                }
            </ul>
            : ''
            }
            <SliderCarouselFuture
                userSettings={userSettings}
                daysArray={futureDaysArr}
                getDayName={getDayName}
            />
        </div>
    );
};

export default FutureForecast;
