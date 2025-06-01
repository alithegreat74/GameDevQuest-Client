import React from "react";
import "./TextInput.css";

interface props {
  label: string;
  placeholder: string;
  type: string;
  inputName: string;
}

const TextInput = ({label, placeholder, type, inputName}: props) => {
  return (
    <p className="text_input flex flex_column gap_8">
      <label className="text_gradient" htmlFor={inputName}>
        {label}
      </label>
      <input
        className="merri"
        id={inputName}
        name={inputName}
        type={type}
        placeholder={placeholder}
      />
    </p>
  );
};

export default TextInput;
