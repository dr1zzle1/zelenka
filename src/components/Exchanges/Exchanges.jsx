import React from "react";
import krakenLogo from "../../assets/krakenLogo.svg";
import binanceLogo from "../../assets/binanceLogo.svg";
import bitfinexLogo from "../../assets/bitfinexLogo.svg";
import bybitLogo from "../../assets/bybitLogo.svg";
import cryptocomLogo from "../../assets/cryptocomLogo.svg";
import coinbaseLogo from "../../assets/coinbaseLogo.svg";

import "./Exchanges.scss";

const Exchanges = () => {
  return (
    <section className="exchanges">
      <div className="container">
        <div className="exchanges__inner">
          <div className="exchanges__info">
            <h3 className="exchanges__tittle">
              Bitles is your reliable guide in the world of digital assets
            </h3>
            <span>
              The Bitles app is a comprehensive solution for trading digital
              assets. Buy <br /> and sell cryptocurrencies quickly and openly,
              comfortably and safely from anywhere in the world.
            </span>
          </div>
          <ul className="exchanges__list">
            <li className="exchanges__item">
              <img src={binanceLogo} alt="binanceLogo" />
            </li>
            <li className="exchanges__item">
              <img src={bybitLogo} alt="bybitLogo" />
            </li>
            <li className="exchanges__item">
              <img src={bitfinexLogo} alt="bitfinexLogo" />
            </li>
            <li className="exchanges__item">
              <img src={cryptocomLogo} alt="cryptocomLogo" />
            </li>
            <li className="exchanges__item">
              <img src={krakenLogo} alt="krakenLogo" />
            </li>
            <li className="exchanges__item">
              <img src={coinbaseLogo} alt="coinbaseLogo" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Exchanges;
