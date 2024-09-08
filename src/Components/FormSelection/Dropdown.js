import './Dropdown.css';

function Dropdown( {options, dropdownClose} ){

    return(
        <div className="Dropdown">
            {options.map((option, index) => (
                <div
                    key={index}
                    className='DropdownOption'
                    onClick={() => {
                        dropdownClose();
                    }}>
                    {option}
                </div>
            ))}
        </div>
    )
}

export default Dropdown;