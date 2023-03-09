// Components
import FutureForecast from './futureForecast.component';
import PastForecast from './pastForecast.component';

// Utils
import { getData } from '../utils/getData';
import { useEffect, useState } from 'react';

const Home = ({secretKey}) => {

	const [location, setLocation] = useState('');
	const [locationTemperature, setLocationTemperature] = useState('');
	const [futureDaysArr, setFutureDaysArr] = useState([]);
	// eslint-disable-next-line
	const [pastDaysArr, setPastDaysArr] = useState([]);

	useEffect(() => {
		getData(
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
			<FutureForecast futureDaysArr={futureDaysArr} />
			<PastForecast />
		</div>
	);
};

export default Home;
