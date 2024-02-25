import React from "react";
import "./Input.scss";

const Input = ({ placeholder, Icon, className, ...props }) => {
  return (
    <div className={className ? `input ${className}` : "input"} {...props}>
      <Icon className="input__icon" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
