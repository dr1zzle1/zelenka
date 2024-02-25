import React from "react";
import { ReactComponent as Logo } from "../../assets/logo4.svg";
import { ReactComponent as Telegram } from "../../assets/telegram.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import AuthLink from "../AuthLink/AuthLink";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__content">
            <div className="footer__left">
              <div className="footer__logo">
                <Logo />
              </div>
              <div className="footer__socials">
                <Link>
                  <Telegram />
                </Link>
                <Link>
                  <Facebook />
                </Link>
                <Link>
                  <Twitter />
                </Link>
              </div>
              <div className="footer__auth-links">
                <AuthLink to="/register">Register</AuthLink>
                <AuthLink to="/login" primary>
                  Log in
                </AuthLink>
              </div>
            </div>
            <div className="footer__right">
              <ul className="footer__links">
                <li>
                  <Link>Trade</Link>
                </li>
                <li>
                  <Link>P2P</Link>
                </li>
                <li>
                  <Link>Partners</Link>
                </li>
                <li>
                  <Link>Mining</Link>
                </li>
                <li>
                  <Link>Academy</Link>
                </li>
              </ul>
              <ul className="footer__politics">
                <li>
                  <Link>Privacy policy</Link>
                </li>
                <li>
                  <Link>Terms of rules</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__copyright">Bitlist© All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
