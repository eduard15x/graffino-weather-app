import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { MdClose } from "react-icons/md";
import UserSelectedSettings from './userSelectedSettings';


const SettingsMenu = ({
    isSettingsMenuVisibile,
    handleSwitchChange,
    temperatureUnitMeasure,
    setTemperatureUnitMeasure,
    unitMeasuresSwitchArray,
    currentForecastLocalStorage,
    updateUserSettings
}) => {

    const [isChecked, setIsChecked] = useState(false);

    const handle = () => {
        setIsChecked(isChecked ? false : true);
    }

    const handleTemperature = () => {
        handleSwitchChange(temperatureUnitMeasure, setTemperatureUnitMeasure);
    }

    return (
        <div className="settings-menu-container">
            <AiOutlineBars className='settings-menu-container__icon' title='menu' />
            <div className={`menu-container ${isSettingsMenuVisibile ? '' : 'd-none'}`}>
                <MdClose className='menu-container__close-icon' />
                <h2 className='menu-container__heading'>Saved Searches</h2>
                <ul className='menu-container__list'>
                    {
                        currentForecastLocalStorage.length > 0
                        ? currentForecastLocalStorage
                            .filter((obj, index, self) => index === self.findIndex((element) => element.cityName === obj.cityName))
                            .map((item, index) => {
                                return (
                                    <li className='menu-container__list--item' key={index}>
                                        <div>
                                            <h3>{ item.cityName }, {item.countryName}</h3>
                                            <p>{item.status}</p>
                                        </div>
                                        <img src={`${item.icon}`} alt={`${item.status}`} />
                                        <div className='item-last'>
                                            <p>{item.temperatureC}°</p>
                                            <p className='item-last__extremes'>
                                                <span>H:{item.highestTemperatureC}°</span>
                                                <span className='item-last--comma'>,</span>
                                                <span>L:{item.lowestTemperatureC}°</span>
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        : 'No saved searches'
                    }
                </ul>

                <h2 className='menu-container__heading'>User settings</h2>
                <UserSelectedSettings
                    temperatureUnitMeasure={temperatureUnitMeasure}
                    handle={handle}
                    handleTemperatur={handleTemperature}
                    isChecked={isChecked}
                    unitMeasuresSwitchArray={unitMeasuresSwitchArray}
                    updateUserSettings={updateUserSettings}
                />
            </div>
        </div>
    )
};

export default SettingsMenu;
