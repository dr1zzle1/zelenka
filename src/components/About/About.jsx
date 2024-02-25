import React from "react";
import "./About.scss";
import cardIcon from "../../assets/card.svg";
import eyeIcon from "../../assets/eye.svg";
import lockIcon from "../../assets/lock.svg";
import supportIcon from "../../assets/support.svg";
import rocketIcon from "../../assets/rocket.svg";
import swtichIcon from "../../assets/switch.svg";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <ul className="about__list">
          <AboutItem
            cardIcon={cardIcon}
            title="User Safe Asset Fund (SAFU)world."
            content="Bitlist holds 10% of all trading fees in a protected asset fund to protect a portion of user funds."
          />
          <AboutItem
            cardIcon={eyeIcon}
            title="User Access Control"
            content="Personalized access control allows you to limit the devices and addresses that can access your account."
          />
          <AboutItem
            cardIcon={lockIcon}
            title="Improved data encryption"
            content="Your transaction data is encrypted - only you can access your personal data."
          />
          <AboutItem
            cardIcon={supportIcon}
            title="Support 24/7"
            content="24/7 real-time support is always ready to help you."
          />
          <AboutItem
            cardIcon={rocketIcon}
            title="Fast replineshments and withdraws"
            content="Transfer funds to and from your accounts quickly and easily."
          />
          <AboutItem
            cardIcon={swtichIcon}
            title="Comfortable P2P platform"
            content="Top up your account in any convenient way on the P2P platform at favorable rates."
          />
        </ul>
      </div>
    </section>
  );
};

export default About;
