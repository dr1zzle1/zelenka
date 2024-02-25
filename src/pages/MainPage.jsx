import React from "react";
import About from "../components/About/About";
import Assets from "../components/Assets/Assets";
import Exchanges from "../components/Exchanges/Exchanges";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import RegisterBlock from "../components/RegisterBlock/RegisterBlock";

const MainPage = () => {
  return (
    <>
      <Header />
      <Intro />
      <Assets />
      <Exchanges />
      <About />
      <RegisterBlock />
      <Footer />
    </>
  );
};

export default MainPage;
