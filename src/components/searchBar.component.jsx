// Import icons
import { BiSearchAlt2 } from 'react-icons/bi';
import { TfiClose } from 'react-icons/tfi';
// Child component
import AutocompleteList from './autocompleteList';

const SearchBar = ({ inputValue, handleInputChange, handleClick, isSearchBarVisible, autocompleteSuggestionsArray }) => {

    return (
        <div className="search-bar-container">
            <BiSearchAlt2 className={`search-bar-container__icon ${isSearchBarVisible ? 'd-none' : ''}`} title="search location" />
            <div className={`searchbar ${isSearchBarVisible ? 'd-flex' : 'd-none'}`} >
                <input className='searchbar__input' type="text" placeholder="Search city" value={inputValue}  onChange={ handleInputChange }/>
                <TfiClose className='searchbar__button__icon--close'/>
                <AutocompleteList autocompleteSuggestionsArray={autocompleteSuggestionsArray} handleClick={handleClick}/>
            </div>
        </div>
    );
};

export default SearchBar;
