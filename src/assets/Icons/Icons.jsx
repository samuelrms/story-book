import React from "react";
import Img from "../../components/Img";
import facebook from "../desktop/facebook.svg";
import instagram from "../desktop/instagram.svg";
import twitter from "../desktop/twitter.svg";

export const FacebookIcon = () => {
  return <Img src={facebook} alt="Facebook" />;
};

export const InstagramIcon = () => {
  return <Img src={instagram} alt="instagram" />;
};

export const TwitterIcon = () => {
  return <Img src={twitter} alt="twitter" />;
};
