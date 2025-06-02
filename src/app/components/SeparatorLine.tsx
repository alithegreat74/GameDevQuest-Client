import React from "react";
import "./SeparatorLine.css";

interface props {
    text: string;
}

const SeparatorLine = ({text}: props) => {
  return (
    <div className="separator_line flex_center">
      <span className="separator_line_gradient left"></span>
      <span className="separator_line_word">{text}</span>
      <span className="separator_line_gradient right"></span>
    </div>
  );
};

export default SeparatorLine;
