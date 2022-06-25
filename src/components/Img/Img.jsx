import React from "react";
import { ImgDefault } from "./styled";

const Img = ({
  fontSize,
  color,
  margin,
  cursor,
  padding,
  background,
  borderRadius,
  border,
  backgroundSize,
  alt,
  src,
  width,
  height,
  boxShadow,
  bordeRadius,
  hoverBackground,
  hoverColor,
  hoverBoder,
  widthTablet,
  heightTablet,
  marginTablet,
  paddingTablet,
  positionTablet,
  topTablet,
  leftTablet,
  rightTablet,
  bottomTablet,
  widthMobileIntermediary,
  heightMobileIntermediary,
  marginMobileIntermediary,
  paddingMobileIntermediary,
  positionMobileIntermediary,
  topMobileIntermediary,
  leftMobileIntermediary,
  rightMobileIntermediary,
  bottomMobileIntermediary,
  ...restProps
}) => {
  return (
    <ImgDefault
      width={width}
      height={height}
      src={src}
      alt={alt}
      backgroundSize={backgroundSize}
      fontSize={fontSize}
      margin={margin}
      color={color}
      cursor={cursor}
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      border={border}
      boxShadow={boxShadow}
      bordeRadius={bordeRadius}
      hoverBackground={hoverBackground}
      hoverBoder={hoverBoder}
      widthTablet={widthTablet}
      heightTablet={heightTablet}
      marginTablet={marginTablet}
      paddingTablet={paddingTablet}
      positionTablet={positionTablet}
      topTablet={topTablet}
      leftTablet={leftTablet}
      rightTablet={rightTablet}
      bottomTablet={bottomTablet}
      widthMobileIntermediary={widthMobileIntermediary}
      heightMobileIntermediary={heightMobileIntermediary}
      marginMobileIntermediary={marginMobileIntermediary}
      paddingMobileIntermediary={paddingMobileIntermediary}
      positionMobileIntermediary={positionMobileIntermediary}
      topMobileIntermediary={topMobileIntermediary}
      leftMobileIntermediary={leftMobileIntermediary}
      rightMobileIntermediary={rightMobileIntermediary}
      bottomMobileIntermediary={bottomMobileIntermediary}
      {...restProps}
    />
  );
};

export default Img;
