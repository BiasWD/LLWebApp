import './Dropdown.css';
import React, { useEffect } from 'react';

function Dropdown( {options, dropdownClose, setSelection, disabled, handleNoDateClick, isOpen} ){

    const handleNoDateKeyDown = () => {
        handleNoDateClick();
        dropdownClose();
    }

    useEffect(() => {
        const firstOption = document.querySelector('.DropdownOption');
        if (firstOption) {
            firstOption.focus();
        }
    }, [options]);

    return(
        <div className="Dropdown" role="listbox" aria-expanded={isOpen}>
            {options.map((option, index) => (
                <div
                    key={index}
                    className='DropdownOption'
                    tabIndex={0}
                    role="option"
                    onClick={ disabled ?  () => {
                        handleNoDateClick();
                        dropdownClose();
                    } :
                        () => {
                        setSelection(option);
                        dropdownClose();
                    }}
                    onKeyDown={ disabled ? handleNoDateKeyDown : (event) => {
                        if (event.code === "Enter" || event.code === "Space") {
                          event.preventDefault();
                          setSelection(option);
                          dropdownClose();
                        }
                      }}
                    >
                    {option}
                </div>
            ))}
        </div>
    )
}

export default Dropdown;