import React from "react";
import { ReactComponent as Graph } from "../../assets/graph.svg";
import { ReactComponent as IntroText } from "../../assets/IntroText.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import Input from "../Input/Input";
import "./Intro.scss";
import Button from "../Button/Button";

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__inner">
          <div className="intro__left">
            <button className="intro__button">
              <IntroText />
            </button>
            <h1>Buy, trade and store cryptocurrencies</h1>
            <form>
              <Input
                className="intro__input"
                Icon={MailIcon}
                placeholder={"Example@gmail.com"}
              />
              <Button className="intro__button-2" primary>
                Sign in
              </Button>
            </form>
          </div>
          <div className="intro__right">
            <Graph />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
