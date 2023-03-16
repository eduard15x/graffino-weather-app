import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { MdClose } from "react-icons/md";
import UserSelectedSettings from './userSelectedSettings';


const SettingsMenu = ({isSettingsMenuVisibile, handleSwitchChange, temperatureUnitMeasure, setTemperatureUnitMeasure, unitMeasuresSwitchArray}) => {

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
                    <li className='menu-container__list--item'>
                        <div>
                            <h3>City name, Country name</h3>
                            <p>Status</p>
                        </div>
                        <p>IMAGE</p>
                        <div className='item-last'>
                            <p>13C</p>
                            <p>h:8C, l: -2C</p>
                        </div>
                    </li>
                    <li className='menu-container__list--item'>
                        <div>
                            <h3>Iasi, Romania</h3>
                            <p>Status</p>
                        </div>
                        <p>IMAGE</p>
                        <div className='item-last'>
                            <p>13C</p>
                            <p>h:8C, l: -2C</p>
                        </div>
                    </li>
                    <li className='menu-container__list--item'>
                        <div>
                            <h3>New Orleans, United States of America</h3>
                            <p>Status</p>
                        </div>
                        <p>IMAGE</p>
                        <div className='item-last'>
                            <p>13C</p>
                            <p>h:8C, l: -2C</p>
                        </div>
                    </li>
                    <li className='menu-container__list--item'>
                        <div>
                            <h3>Iasi, Romania</h3>
                            <p>Status</p>
                        </div>
                        <p>IMAGE</p>
                        <div className='item-last'>
                            <p>13C</p>
                            <p>h:8C, l: -2C</p>
                        </div>
                    </li>
                    <li className='menu-container__list--item'>
                        <div>
                            <h3>New Orleans, United States of America</h3>
                            <p>Status</p>
                        </div>
                        <p>IMAGE</p>
                        <div className='item-last'>
                            <p>13C</p>
                            <p>h:8C, l: -2C</p>
                        </div>
                    </li>
                </ul>

                
                <h2 className='menu-container__heading'>User settings</h2>
                <UserSelectedSettings
                    temperatureUnitMeasure={temperatureUnitMeasure}
                    handle={handle}
                    handleTemperatur={handleTemperature}
                    isChecked={isChecked}
                    unitMeasuresSwitchArray={unitMeasuresSwitchArray}
                />
                <p>{ isChecked ? 'chekedd' : 'falsed'}</p>
            </div>
        </div>
    )
};

export default SettingsMenu;
