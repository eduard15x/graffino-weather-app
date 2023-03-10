const SearchBar = ({cityName, handleInputChange, handleClick }) => {
    return(
        <div>
            <input type="text" placeholder="Search city" value={cityName} onChange={handleInputChange}/>
            <button onClick={handleClick}>Search</button>
        </div>
    )
};

export default SearchBar;
