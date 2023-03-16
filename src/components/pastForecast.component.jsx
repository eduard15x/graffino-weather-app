const PastForecast = ({ userSettings, pastDaysArr, getDayName }) => {
    return (
		<div className="history-forecast-container">
			<h2 className="history-forecast-container__heading">Last 7 days</h2>
			<ul className="forecast-list">
				{
					// Remove duplicate objects after fetching the data
					// Ascending sort the array
					// Map through the array and return the data
					pastDaysArr
						.filter((obj, index, self) => index === self.findIndex((element) => element.id === obj.id))
						.sort((a, b) => a.id - b.id)
						.map((item, index) => {
							return (
								<li className="forecast-list__item" key={ index }>
									<p className="forecast-list__item--heading">{ getDayName(item.date, 'en-US') }</p>
									<img className="forecast-list__item--icon" src={ item.icon } alt={ item.description + ' icon' } />
									<p className="forecast-list__item--temperature">
										<span>H:{ userSettings.temperature ? Math.round(item.highestTemperatureC) : Math.round(item.highestTemperatureF) }° </span>
										<span>L:{ userSettings.temperature ? Math.round(item.lowestTemperatureC) : Math.round(item.lowestTemperatureF) }°</span>
									</p>
									<p className="forecast-list__item--condition">{ item.description }</p>
								</li>
							);
						})
				}
			</ul>
		</div>
    );
};

export default PastForecast;
