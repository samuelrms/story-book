import React from "react";
import { HeaderContainer } from "./styled";
import { text } from "../mooks/text";
import RC from "../../assets/desktop/RC.svg";
import Button from "../Button";
import Title from "../Title";

const Header = () => {
  return (
    <HeaderContainer>
      <Title children="Header" />
    </HeaderContainer>
  );
};

export default Header;
