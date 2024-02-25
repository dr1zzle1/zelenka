import React from "react";
import "./AuthLink.scss";
import { Link } from "react-router-dom";

const AuthLink = ({ children, primary, className, ...props }) => {
  return (
    <Link
      {...props}
      className={
        (primary ? "auth-link auth-link-primary " : "auth-link ") +
        (className || "")
      }
    >
      {children}
    </Link>
  );
};

export default AuthLink;
