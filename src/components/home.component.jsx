// Components
import FutureForecast from './futureForecast.component';
import PastForecast from './pastForecast.component';
import SearchBar from './searchBar.component';

// Utils
import { getForecast, getHistoryForecast } from '../utils/getForecastData';
import { getCurrentDate, getConvertedDate, getLast7Days } from '../utils/getDates';
import { useEffect, useState } from 'react';

const Home = ({secretKey}) => {
	// fixed variables
	const CURRENT_DATE = getConvertedDate(getCurrentDate());
	const LAST_7_DAYS = getLast7Days(getCurrentDate(), 7);

	// states
	const [cityName, setCityName] = useState('');
	const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');
	const [locationTemperature, setLocationTemperature] = useState('');
	const [futureDaysArr, setFutureDaysArr] = useState([]);
	const [pastDaysArr, setPastDaysArr] = useState([]);

	const handleInputChange = (e) => {
		setCityName(e.target.value);
	};

	const handleClick = () => {
		setTitle(cityName);
	}

	useEffect(() => {
		// fetch data for current location
		// get data for current day and the next 5 days
		getForecast(
			`http://api.weatherapi.com/v1/forecast.json?key=${secretKey}&q=Sibiu&days=6&aqi=no&alerts=no`,
			setLocation,
			setLocationTemperature,
			setFutureDaysArr
		);

		// get data for the last 7 days
		for (let day of LAST_7_DAYS) {
			getHistoryForecast(
				`http://api.weatherapi.com/v1/history.json?key=e27450645f1348d6b79132152230703&q=Sibiu&dt=${day}`,
				setPastDaysArr
			)
		}
	// eslint-disable-next-line
	}, []);

	// console.log(pastDaysArr)
	// console.log(pastDaysArr[0]?.data)

	return (
		<div>
			<h1>{location} = {locationTemperature}℃</h1>
			<h1>{title} - this will store the geolocation</h1>
			<SearchBar
				cityName={cityName}
				handleClick={handleClick}
				handleInputChange={handleInputChange}
			/>
			<FutureForecast
				futureDaysArr={futureDaysArr}
			/>
			<PastForecast
				currentDate={CURRENT_DATE}
				last7Days={LAST_7_DAYS}
				pastDaysArr={pastDaysArr}
			/>
		</div>
	);
};

export default Home;
