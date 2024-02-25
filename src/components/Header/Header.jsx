import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/Logo1.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg";
import AuthLink from "../AuthLink/AuthLink";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

const Header = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <img src={logo} className="header__logo" alt="logo" />
            <Input
              className="header__input"
              placeholder="Search"
              Icon={SearchIcon}
            />
          </div>
          <div
            className={`header__right ${isOpen ? "header__right-active" : ""}`}
          >
            <div className="header__links">
              <Link className="header__link" to="#">
                Trade
              </Link>
              <Link className="header__link" to="#">
                P2P
              </Link>
              <Link className="header__link" to="#">
                Partners
              </Link>
              <Link className="header__link" to="#">
                Mining
              </Link>
              <Link className="header__link" to="#">
                Academy
              </Link>
            </div>
            <div className="header__auth-links">
              <AuthLink to="/register">Register</AuthLink>
              <AuthLink to="/login" primary>
                Log in
              </AuthLink>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="header__button-burger"
          >
            <BurgerIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
