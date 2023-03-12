import { useGeolocated } from 'react-geolocated';
import { useEffect, useState } from 'react';
// Components
import CurrentLocationDetails from './currentLocationDetails.component';
import FutureForecast from './futureForecast.component';
import PastForecast from './pastForecast.component';
import SettingsMenu from './settingsMenu.components';
import SearchBar from './searchBar.component';
// Utils
import { getCurrentLocation } from '../utils/getCurrentLocation';
import { getForecast, getHistoryForecast } from '../utils/getForecastData';
// eslint-disable-next-line
import { getCurrentDate, getConvertedDate, getLastDays } from '../utils/getDates';
import { getDayName } from '../utils/getDayName';

const Home = ({secretKey}) => {
	// fixed variables
	const { coords, isGeolocationAvailable, isGeolocationEnabled } =
		useGeolocated({
			positionOptions: {
				enableHighAccuracy: false,
			},
			userDecisionTimeout: 5000,
			watchPosition: true
		});

	const CURRENT_DATE = getCurrentDate();
	// const CURRENT_DATE_CONVERTED = getConvertedDate(getCurrentDate());
	const LAST_7_DAYS = getLastDays(getCurrentDate(), 7);
	// states
	const [inputValue, setInputValue] = useState('');
	const [cityName, setCityName] = useState('');
	const [currentForecast, setCurrentForecast] = useState({});
	const [pastDaysArr, setPastDaysArr] = useState([]);
	const [isCurrentLocationSet, setIsCurrentLocation] = useState(false);
	const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
	//
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

	// handlers
	const requestData = () => {
		// get data for current day and the next 5 days
		getForecast(
			`http://api.weatherapi.com/v1/forecast.json?key=${secretKey}&q=${cityName}&days=6&aqi=yes&alerts=no`,
			setCurrentForecast
		);

		// get data for the last 7 days
		for (let day of LAST_7_DAYS) {
			getHistoryForecast(
				`http://api.weatherapi.com/v1/history.json?key=${secretKey}&q=${cityName}&dt=${day}`,
				setPastDaysArr,
			);
		}

		// set state for button back to false after data was requested
		setIsSearchButtonClicked(false);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleClick = () => {
		setCityName(inputValue);
		setPastDaysArr([]);
		setIsSearchButtonClicked(true);

		if (isSearchButtonClicked) {
			requestData();
		}
	};

	const handleSearchBarVisibility = (e) => {
		// if (e.target.className.baseVal === 'search-bar-container__icon') {
		// 	setIsSearchBarVisible(true);
		// 	console.log(e.target + 'true')
		// 	return;
		// } else if (e.target.className !== 'searchbar__input') {
		// 	setIsSearchBarVisible(false);
		// 	console.log(e.target.className + 'false');
		// }
		console.log(e.target)
		if (e.target.className.baseVal === 'search-bar-container__icon ' || e.target.className === 'search-bar-container__icon ') {
			setIsSearchBarVisible(true);
			console.log(e.target.className + 'tru');
		} else if (e.target.className !== 'searchbar__input') {
			setIsSearchBarVisible(false);
			console.log(e.target.className + 'false');
		}
	};


	useEffect(() => {
		if (!isCurrentLocationSet) {
			// get current browser's location if it wasn't set already
			getCurrentLocation(coords, isGeolocationAvailable, isGeolocationEnabled, setCityName, setIsCurrentLocation);

			if (isCurrentLocationSet) {
				requestData();
			}
		} else {
			requestData();
		}

	// eslint-disable-next-line
	}, [isGeolocationAvailable, isGeolocationEnabled, coords, isSearchButtonClicked, isSearchBarVisible]);

	return (
		<div onClick={handleSearchBarVisibility}>
			<SettingsMenu />
			<SearchBar
				inputValue={inputValue}
				handleClick={handleClick}
				handleInputChange={handleInputChange}
				isSearchBarVisible={isSearchBarVisible}
			/>
			<CurrentLocationDetails
				currentDate={CURRENT_DATE}
				currentForecast={currentForecast}
			/>
			<FutureForecast
				futureDaysArr={currentForecast.nextDaysArray}
				getDayName={getDayName}
			/>
			<PastForecast
				pastDaysArr={pastDaysArr}
				getDayName={getDayName}
			/>
		</div>
	);
};

export default Home;
