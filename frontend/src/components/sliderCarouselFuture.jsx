import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderCarouselFuture = ({ userSettings, daysArray, getDayName }) => {
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
                daysArray ?
                daysArray
                    .filter((item, index) => index > 0)
                    .map((item, index ) => {
                        return (
                            // eslint-disable-next-line
                            <div className="forecast-list__item" key={ index }>
                                <p className="forecast-list__item--heading">{ getDayName(item.date, 'en-US') }</p>
                                <img className="forecast-list__item--icon" src={ item.day.condition.icon } alt={ item.day.condition.text + ' icon' } />
                                <p className="forecast-list__item--temperature">
                                    <span>H:{ userSettings.temperature ? Math.round(item.day.maxtemp_c) : Math.round(item.day.maxtemp_f) }° </span>
                                    <span>L:{ userSettings.temperature ? Math.round(item.day.mintemp_c) : Math.round(item.day.mintemp_f) }°</span>
                                </p>
                                <p className="forecast-list__item--condition">{ item.day.condition.text }</p>
                            </div>
                        );
                    })
                : ''
            }
        </Carousel>
    );
};

export default SliderCarouselFuture;
