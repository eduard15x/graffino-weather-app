import Switch from "react-switch";

const UserSelectedSettings = ({
    unitMeasuresSwitchArray,
    updateUserSettings
}) => {

    return (
        <div className="user-settings-list">
            {
                unitMeasuresSwitchArray ?
                unitMeasuresSwitchArray.map((item, index) => {
                    return (
                        <div key={ index } className="user-settings-list__item">
                            <h3>{ item.measureName }</h3>
                            <div className="user-settings-list__item--toggle">
                                <p className={ item.unitMeasure ? '' : 'bold' }>{ item.unitMeasureEU }</p>
                                <Switch
                                    className="switch-btn"
                                    onChange={ item.handleSwitchChange }
                                    onClick={updateUserSettings(item.property, item.unitMeasure)}
                                    checked={ item.unitMeasure }
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    offColor="#2c2c2c"
                                    onColor="#2c2c2c"
                                    data-property={item.property}
                                />
                                <p className={ !item.unitMeasure ? '' : 'bold' }>{ item.unitMeasureUS }</p>
                            </div>
                        </div>
                    )
                })
                : ''
            }
        </div>
    )
};

export default UserSelectedSettings;
