// Components
import FutureForecast from './futureForecast.component';
import PastForecast from './pastForecast.component';

// Utils
import { getForecast } from '../utils/getForecastData';
import { getCurrentDate, getConvertedDate, getLast7Days } from '../utils/getDates';
import { useEffect, useState } from 'react';

const Home = ({secretKey}) => {
	// fixed variables
	const CURRENT_DATE = getConvertedDate(getCurrentDate());
	const LAST_7_DAYS = getLast7Days(getCurrentDate(), 7);

	const [location, setLocation] = useState('');
	const [locationTemperature, setLocationTemperature] = useState('');
	const [futureDaysArr, setFutureDaysArr] = useState([]);
	// eslint-disable-next-line
	const [pastDaysArr, setPastDaysArr] = useState([]);
	const haha = getCurrentDate();
	console.log(LAST_7_DAYS)

	useEffect(() => {
		getForecast(
			`http://api.weatherapi.com/v1/forecast.json?key=${secretKey}&q=Sibiu&days=6&aqi=no&alerts=no`,
			setLocation,
			setLocationTemperature,
			setFutureDaysArr
		);
	// eslint-disable-next-line
	}, [])

	return (
		<div>
			<h1>{location} = {locationTemperature}℃</h1>
			<FutureForecast
				futureDaysArr={futureDaysArr}
			/>
			<PastForecast
				pastDaysArr={pastDaysArr}
				currentDate={CURRENT_DATE}
				last7Days={LAST_7_DAYS}
			/>
			<p>current date: {CURRENT_DATE}</p>
			<p>last 7 days: {LAST_7_DAYS}</p>
		</div>
	);
};

export default Home;
