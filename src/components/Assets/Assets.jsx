import React, { useEffect, useState } from "react";
import Coin from "../Coin/Coin";
import Button from "../Button/Button";
import axios from "axios";
import "./Assets.scss";

const Assets = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const apiUrl = "https://api.coingecko.com/api/v3/search/trending";
    axios.get(apiUrl).then((resp) => {
      setCoins(resp.data.coins);
    });
  }, []);

  return (
    <section className="assets">
      <div className="container">
        <div className="assets__inner">
          <table>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Price</th>
                <th>Change</th>
                <th>Volume</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coins.slice(0, 6).map(({ item }) => {
                return (
                  <Coin
                    key={item.coin_id}
                    iconSrc={item.small}
                    name={item.name}
                    price={item.data.price}
                    change={item.data.price_change_percentage_24h.usd}
                    volume={item.data.total_volume}
                    shortname={item.symbol}
                  />
                );
              })}
            </tbody>
          </table>
          <Button className="assets__btn">All assets</Button>
        </div>
      </div>
    </section>
  );
};

export default Assets;
