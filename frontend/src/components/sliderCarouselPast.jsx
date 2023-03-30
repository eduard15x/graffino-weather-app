import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderCarouselPast = ({ userSettings, daysArray, getDayName }) => {
    return (
        <Carousel
			className="forecast-list-smallview"
			showThumbs={false}
			autoPlay={false}
            swipeable={true}
            emulateTouch={true}
			showStatus={false}
			showArrows={false}
			infiniteLoop={true}
		>
            {
					// Remove duplicate objects after fetching the data
					// Descending sort the array
					// Map through the array and return the data
					daysArray ?
					daysArray
						.filter((obj, index, self) => index === self.findIndex((element) => element.id === obj.id))
						.sort((a, b) => b.id - a.id)
						.map((item, index) => {
							return (
								<li className="forecast-list__item" key={ index }>
									<p className="forecast-list__item--heading">{ getDayName(item.date, 'en-US') }</p>
									<img className="forecast-list__item--icon" src={ item.icon } alt={ item.description + ' icon' } />
									<p className="forecast-list__item--temperature">
										<span>H:{ userSettings.temperature ? Math.round(item.highestTemperatureC) : Math.round(item.highestTemperatureF) }° </span>
										<span>L:{ userSettings.temperature ? Math.round(item.lowestTemperatureC) : Math.round(item.lowestTemperatureF) }°</span>
									</p>
									<p className="forecast-list__item--condition">{ item.description }</p>
								</li>
							);
						})
					: ''
				}
        </Carousel>
    );
};

export default SliderCarouselPast;
