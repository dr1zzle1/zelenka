import React from "react";
import "./Button.scss";

const Button = ({ children, primary, className, ...props }) => {
  return (
    <button
      {...props}
      className={
        (primary ? "button button-primary " : "button ") + (className || "")
      }
    >
      {children}
    </button>
  );
};

export default Button;
