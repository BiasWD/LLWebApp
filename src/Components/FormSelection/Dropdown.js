import './Dropdown.css';

function Dropdown( {options, dropdownClose, setSelection, disabled} ){

    return(
        <div className="Dropdown">
            {options.map((option, index) => (
                <div
                    key={index}
                    className='DropdownOption'
                    onClick={ disabled ?  () => {
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