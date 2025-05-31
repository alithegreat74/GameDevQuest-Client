import React from "react";
import "./TextInput.css"

const TextInput = () => {
  return (
    <p className="text_input flex flex_column gap_8">
      <label className="text_gradient" htmlFor="username">Adveturer Name</label>
      <input className="merri" name="username" type="text" placeholder="Username or Email..." />
    </p>
  );
};

export default TextInput;
