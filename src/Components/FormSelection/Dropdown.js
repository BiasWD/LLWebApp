import './Dropdown.css';

function Dropdown( {options, dropdownClose, setSelection} ){

    return(
        <div className="Dropdown">
            {options.map((option, index) => (
                <div
                    key={index}
                    className='DropdownOption'
                    onClick={() => {
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