const PastForecast = ({currentDate, last7Days, pastDaysArr, getDayName}) => {
    return (
        <div>
            {
				// Remove duplicate objects after fetching the data
				// Ascending sort the array
				// Map through the array and return the data
				pastDaysArr
                    .filter((obj, index, self) => index === self.findIndex(element => element.id === obj.id))
					.sort((a, b) => a.id - b.id)
					.map((item, index) => {
						return (
							<li key={index}>
								<p>{getDayName(item.data, 'en-US')}</p>
							</li>
						);
					})
			}
        </div>
    );
};

export default PastForecast;
