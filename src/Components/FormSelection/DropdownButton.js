import "./Dropdown.css";
import Dropdown from "./Dropdown.js";
import { IconChevronDown } from "@tabler/icons-react";
import { IconChevronUp } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

function DropdownButton({
  image,
  options,
  placeholder,
  selectedOption,
  optionSelection,
  disabled,
  handleNoDateClick,
  isOpenDD,
  openDD,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) {
      openDD(placeholder);
    } else {
      openDD("");
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter" || event.code === "Space") {
      event.preventDefault();
      toggleDropdown();
    }
  };

  useEffect(() => {
    if (isOpenDD !== placeholder && isOpenDD !== "") {
      closeDropdown();
    }

    return () => {
      // Cleanup logic here (if needed)
    };
  }, [isOpenDD]); // Dependency array

  return (
    <div className="DropdownWrapper">
      <div
        className={`DropdownButton ${selectedOption ? "selected" : ""}`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
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
          isOpen={isOpen}
        />
      )}
    </div>
  );
}

export default DropdownButton;
