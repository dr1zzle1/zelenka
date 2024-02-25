import React from "react";
import "./About.scss";

const AboutItem = ({ cardIcon, title, content }) => {
  return (
    <li className="about__item">
      <img src={cardIcon} alt="" />
      <h4>{title}</h4>
      <span>{content}</span>
    </li>
  );
};

export default AboutItem;
