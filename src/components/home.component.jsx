import { useGeolocated } from 'react-geolocated';
import { useEffect, useState } from 'react';
// Components
import CurrentLocationDetails from './currentLocationDetails.component';
import FutureForecast from './futureForecast.component';
import PastForecast from './pastForecast.component';
import SettingsMenu from './settingsMenu.components';
import SearchBar from './searchBar.component';
import LoadingSpinner from './loadingSpinner';
// Utils
import { getCurrentLocation } from '../utils/getCurrentLocation';
import { getForecast, getHistoryForecast } from '../utils/getForecastData';
// eslint-disable-next-line
import { getCurrentDate, getConvertedDate, getLastDays } from '../utils/getDates';
import { getDayName } from '../utils/getDayName';
import { getCitySuggestions } from '../utils/getCitySuggestions';

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
	// Static variables
	const CURRENT_DATE = getCurrentDate();
	const LAST_7_DAYS = getLastDays(getCurrentDate(), 7);
	// States
	const [inputValue, setInputValue] = useState('');
	const [cityName, setCityName] = useState('');
	const [currentForecast, setCurrentForecast] = useState({});
	const [pastDaysArr, setPastDaysArr] = useState([]);
	const [isCurrentLocationSet, setIsCurrentLocation] = useState(false);
	const [autocompleteSuggestionsArray, setAutocompleteSuggestionsArray] = useState([]);
	// components visibility
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [isSettingsMenuVisibile, setIsSettingsMenuVisible] = useState(false);
	// User selected settings
	const [temperatureUnitMeasure, setTemperatureUnitMeasure] = useState(true);
	const [precipitationUnitMeasure, setPrecipitationUnitMeasure] = useState(true);
	const [windUnitMeasure, setWindUnitMeasure] = useState(true);
	const [pressureUnitMeasure, setPressureUnitMeasure] = useState(true);
	const [visibilityUnitMeasure, setVisibilityUnitMeasure] = useState(true);
	// Deppendencies for side effect
	const deppendenciesArr = [isGeolocationAvailable, isGeolocationEnabled, coords, isSearchBarVisible];

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
		// set as default inputValue and setAutocompleteSuggestionsArray
		setInputValue('');
		setAutocompleteSuggestionsArray([]);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		if (inputValue.length > 0) {
			getCitySuggestions(`http://api.weatherapi.com/v1/search.json?key=e27450645f1348d6b79132152230703&q=${inputValue}`, setAutocompleteSuggestionsArray);
		}
	};

	const handleClick = (e) => {
		setCityName(e.target.getAttribute('data-city-coords'));
		setPastDaysArr([]);
		requestData();
	};

	const handleSearchBarVisibility = (e) => {
		if (e.target.className.baseVal === 'search-bar-container__icon ' || e.target.className === 'search-bar-container__icon' || e.target.className === 'searchbar__input') {
			setIsSearchBarVisible(true);
		} else if (e.target.className !== 'searchbar__input' || e.target.className !== 'settings-menu-container') {
			setIsSearchBarVisible(false);
		}

		if (e.target.className.baseVal === 'settings-menu-container__icon') {
			setIsSettingsMenuVisible(true);
		} else if (e.target.className.baseVal === 'menu-container__close-icon' || e.target.getAttribute('d') === 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z') {
			setIsSettingsMenuVisible(false);
		}
	};

	const handleSwitchChange = (currentState, setState) => {
		setState(currentState ? false : true);
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
	}, deppendenciesArr);


	const unitMeasuresSwitchArray = [
		{
			handleSwitchChange: () => setTemperatureUnitMeasure(temperatureUnitMeasure ? false : true),
			unitMeasure: temperatureUnitMeasure,
			measureName: 'Temperature',
			unitMeasureEU: '°C',
			unitMeasureUS: '°F',
		},
		{
			handleSwitchChange: () => setPrecipitationUnitMeasure(precipitationUnitMeasure ? false : true),
			unitMeasure: precipitationUnitMeasure,
			measureName: 'Precipitation',
			unitMeasureEU: 'in',
			unitMeasureUS: 'mm',
		},
		{
			handleSwitchChange: () => setWindUnitMeasure(windUnitMeasure ? false : true),
			unitMeasure: windUnitMeasure,
			measureName: 'Wind',
			unitMeasureEU: 'kmh',
			unitMeasureUS: 'mph',
		},
		{
			handleSwitchChange:  () => setPressureUnitMeasure(pressureUnitMeasure ? false : true),
			unitMeasure: pressureUnitMeasure,
			measureName: 'Pressure',
			unitMeasureEU: 'in',
			unitMeasureUS: 'mb',
		},
		{
			handleSwitchChange: () => setVisibilityUnitMeasure(visibilityUnitMeasure ? false : true),
			unitMeasure: visibilityUnitMeasure,
			measureName: 'Visibility',
			unitMeasureEU: 'km',
			unitMeasureUS: 'miles',
		}
	];

	const userSettings = {
		temperature: temperatureUnitMeasure,
		precipitation: precipitationUnitMeasure,
		wind: windUnitMeasure,
		pressure: pressureUnitMeasure,
		visibility: visibilityUnitMeasure
	};

	if (currentForecast.cityName !== undefined) {
		return (
			<div onClick={handleSearchBarVisibility}>
				<SettingsMenu
					handleSwitchChange={handleSwitchChange}
					temperatureUnitMeasure={temperatureUnitMeasure}
					setTemperatureUnitMeasure={setTemperatureUnitMeasure}
					unitMeasuresSwitchArray={unitMeasuresSwitchArray}
					isSettingsMenuVisibile={isSettingsMenuVisibile}
				/>
				<SearchBar
					inputValue={inputValue}
					handleClick={handleClick}
					handleInputChange={handleInputChange}
					isSearchBarVisible={isSearchBarVisible}
					autocompleteSuggestionsArray={autocompleteSuggestionsArray}
				/>
				<CurrentLocationDetails
					userSettings={userSettings}
					currentDate={CURRENT_DATE}
					currentForecast={currentForecast}
				/>
				<FutureForecast
					futureDaysArr={currentForecast.nextDaysArray}
					getDayName={getDayName}
				/>
				<PastForecast
					userSettings={userSettings}
					pastDaysArr={pastDaysArr}
					getDayName={getDayName}
				/>
			</div>
		);
	} else {
		return (
			<LoadingSpinner />
		);
	}
};

export default Home;
