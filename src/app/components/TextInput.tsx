"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import "./TextInput.css";


interface props {
  label: string;
  placeholder: string;
  type: string;
  inputName: string;
  inputText?: string;
  setInputText?:(text:string)=>void;
}

const TextInput = ({ label, placeholder, type, inputName, inputText, setInputText}: props) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <p className="text_input flex flex_column gap_8 relative">
      <label className="text_gradient" htmlFor={inputName}>
        {label}
      </label>
      <input
        className="merri"
        id={inputName}
        value={inputText}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        onChange={(e)=>{setInputText?.(e.target.value)}}
      />
      {isPassword && (
        <button
          tabIndex={-1}
          type="button"
          onClick={togglePassword}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <Image
            src={showPassword ? "/eye.svg" : "/eye-off.svg"}
            alt="show/hide"
            width={24}
            height={24}
          />
        </button>
      )}
    </p>
  );
};

export default TextInput;
