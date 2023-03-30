const getCitySuggestions = (url, setAutocompleteSuggestionsArray) => {
    fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setAutocompleteSuggestionsArray(data);
			})
			.catch((err) => console.log(err));
};

module.exports = {
    getCitySuggestions
};
