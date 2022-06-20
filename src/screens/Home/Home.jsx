import React from "react";
import Title from "../../components/Title";
import { ContainerHome } from "./styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Title children="Você está na Home" />
      <Footer />
    </ContainerHome>
  );
};

export default Home;
