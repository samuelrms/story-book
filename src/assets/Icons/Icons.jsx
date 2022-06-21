import React from "react";
import Img from "../../components/Img";
import facebook from "../desktop/facebook.svg";
import instagram from "../desktop/instagram.svg";
import twitter from "../desktop/twitter.svg";

export const FacebookIcon = ({
  width,
  height,
  margin,
  padding,
  ...resProps
}) => {
  return (
    <Img
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      {...resProps}
      src={facebook}
      alt="Logo Facebook"
    />
  );
};

export const InstagramIcon = ({
  width,
  height,
  margin,
  padding,
  ...resProps
}) => {
  return (
    <Img
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      {...resProps}
      src={instagram}
      alt="Logo Instagram"
    />
  );
};

export const TwitterIcon = ({
  width,
  height,
  margin,
  padding,
  ...resProps
}) => {
  return (
    <Img
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      {...resProps}
      src={twitter}
      alt="Logo Twitter"
    />
  );
};
