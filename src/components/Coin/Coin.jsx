import React from "react";
import "./Coin.scss";

const Coin = ({ name, price, change, volume, iconSrc, shortname }) => {
  return (
    <tr className="coin">
      <td data-label="name" className="coin__info">
        <img src={iconSrc} alt={`${name}-icon`} />
        <span className="coin__name">{name}</span>
        <span className="coin__shortname">{shortname}</span>
      </td>
      <td data-label="price" className="coin__price">
        {price}
      </td>
      <td
        data-label="change"
        className={
          change < 0 ? "coin__change coin__change--neg" : "coin__change"
        }
      >
        {Math.ceil(Math.abs(change))}%
      </td>
      <td data-label="volume" className="coin__volume">
        {volume}
      </td>
      <td>
        <button className="coin__button">Trade</button>
      </td>
    </tr>
  );
};

export default Coin;
