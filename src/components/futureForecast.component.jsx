const FutureForecast = ({futureDaysArr, getDayName}) => {
    return (
        <div>
            <ul>
                {
                    futureDaysArr.filter((item, index) => index > 0)
                        .map((item, index ) => {
                            return (
                                <li key={index}>
                                    <h3>{ getDayName(item.date, 'en-US') }</h3>
                                    <p>{ item.day.avgtemp_c } ℃</p>
                                </li>
                            )
                        })
                }
            </ul>
        </div>
    );
};

export default FutureForecast;
