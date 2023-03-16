const AirCardInfo = ({property, value, details, condition, firstValue, secondValue}) => {
    return (
        <div className="additional-info-list__item">
            <p className="additional-info-list__item--heading">{property}</p>
            <p className="additional-info-list__item--value">{value}</p>
            {
                details.length > 0
                ? <p className="additional-info-list__item--detail">{details}</p>
                : <p className="additional-info-list__item--detail">
                    <span className={ condition ? 'bold' : '' }>{firstValue}</span>
                    <span className={ !condition ? 'bold' : '' }>{secondValue}</span>
                </p>
            }
        </div>
    );
};

export default AirCardInfo;
