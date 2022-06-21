import React from "react";
import { HeaderContainer } from "./styled";
import Title from "../Title";

const Header = () => {
  return (
    <HeaderContainer>
      <Title children="Header" />
    </HeaderContainer>
  );
};

export default Header;
