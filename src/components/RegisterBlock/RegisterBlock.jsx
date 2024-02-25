import React from "react";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as Logo } from "../../assets/logo3.svg";

import Input from "../Input/Input";
import Button from "../Button/Button";

import "./RegisterBlock.scss";

const RegisterBlock = () => {
  return (
    <section className="register-block">
      <div className="container">
        <div className="register-block__inner">
          <h3 className="register-block__title">
            Register your account now and start to trade
          </h3>
          <form className="register-block__form" action="#">
            <Input
              className="register-block__input"
              Icon={MailIcon}
              placeholder={"Example@gmail.com"}
            />
            <Button className="register-block__button" primary>
              Sign in
            </Button>
          </form>
          <div className="register-block__logo">
            <Logo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterBlock;
