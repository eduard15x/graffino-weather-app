import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { TfiClose } from 'react-icons/tfi';

const SearchBar = ({ inputValue, handleInputChange, handleClick, isSearchBarVisible }) => {

    // const handleModalShow = () => {
    //     setIsSearchBarVisible(isSearchBarVisible ? false : true);
    // }

    // const handle = (e) => {
    //     console.log(e.target.className)
    // }

    return(
        <div className="search-bar-container">
            <BiSearchAlt2 className={`search-bar-container__icon ${isSearchBarVisible ? 'd-none' : ''}`}/>
            <div className={`searchbar ${isSearchBarVisible ? 'd-flex' : 'd-none'}`} >
                <input className='searchbar__input' type="text" placeholder="Search city" value={inputValue}  onChange={ handleInputChange }/>
                <button className='searchbar__button' onClick={handleClick}>
                    <BiSearchAlt2 className='searchbar__button__icon--search' />
                </button>
                <TfiClose className='searchbar__button__icon--close'/>
            </div>
        </div>
    )
};

export default SearchBar;
