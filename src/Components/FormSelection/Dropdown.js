import './Dropdown.css';

function Dropdown( {options, dropdownClose, setSelection, disabled, handleNoDateClick} ){

    return(
        <div className="Dropdown">
            {options.map((option, index) => (
                <div
                    key={index}
                    className='DropdownOption'
                    onClick={ disabled ?  () => {
                        handleNoDateClick();
                        dropdownClose();
                    } :
                        () => {
                        setSelection(option);
                        dropdownClose();
                    }}>
                    {option}
                </div>
            ))}
        </div>
    )
}

export default Dropdown;