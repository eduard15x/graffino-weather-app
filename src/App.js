// Components
import Home from "./components/home.component";

function App() {
	const SECRET_KEY=process.env.REACT_APP_WEATHER_APP_API;

	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
