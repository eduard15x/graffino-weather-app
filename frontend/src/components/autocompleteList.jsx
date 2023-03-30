const AutocompleteList = ({ autocompleteSuggestionsArray, handleClick }) => {
    return (
        <ul className="autocomplete-list">
            {
                autocompleteSuggestionsArray.length > 0 ?
                autocompleteSuggestionsArray.map((item, index) => {
                    return (
                        <li className="autocomplete-list__item"
                            key={ index }
                            id={ item.id }
                            data-city-coords={`${ item.lat },${ item.lon }`}
                            data-fullname={`${ item.name }, ${ item.country }`}
                            onClick={ handleClick }
                        >
                            { item.name }, { item.country }
                        </li>
                    );
                })
                : ''
            }
        </ul>
    )
};

export default AutocompleteList;
