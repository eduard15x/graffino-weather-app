const getCurrentLocation = (coords, isGeolocationAvailable, isGeolocationEnabled, setCityName, setIsCurrentLocation) => {
    if (!isGeolocationAvailable) {
        console.log('not available');
    } else if (!isGeolocationEnabled) {
        console.log('not enabled');
    } else if (coords) {
        setCityName(`${coords.latitude},${coords.longitude}`);
        setIsCurrentLocation(true);
    }
};

module.exports = {
    getCurrentLocation
};
