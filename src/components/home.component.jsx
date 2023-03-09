// Components
import FutureForecast from './futureForecast.component';
import PastForecast from './pastForecast.component';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<FutureForecast />
			<PastForecast />
		</div>
	);
};

export default Home;
