import "./Dropdown.css";
import Dropdown from "./Dropdown.js";
import { IconChevronDown } from "@tabler/icons-react";
import { IconChevronUp } from "@tabler/icons-react";
import React, { useState } from "react";

function DropdownButton({
  image,
  options,
  placeholder,
  selectedOption,
  optionSelection,
  disabled,
  handleNoDateClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="DropdownWrapper" tabIndex={0} onBlur={closeDropdown}>
      <div
        className={`DropdownButton ${selectedOption ? "selected" : ""}`}
        onClick={toggleDropdown}
      >
        <div>{image}</div>
        <div>{selectedOption || placeholder}</div>
        <div>{isOpen ? <IconChevronUp /> : <IconChevronDown />}</div>
      </div>
      {isOpen && (
        <Dropdown
          options={options}
          dropdownClose={closeDropdown}
          setSelection={optionSelection}
          disabled={disabled}
          handleNoDateClick={handleNoDateClick}
        />
      )}
    </div>
  );
}

export default DropdownButton;
