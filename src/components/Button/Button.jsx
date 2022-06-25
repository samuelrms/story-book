import React from "react";
import { ButtonDefault } from "./styled";

const Button = ({
  onClick,
  children,
  width,
  height,
  color,
  background,
  bordeRadius,
  border,
  cursor,
  boxShadow,
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
    <ButtonDefault
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      background={background}
      bordeRadius={bordeRadius}
      border={border}
      cursor={cursor}
      boxShadow={boxShadow}
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
    >
      {children}
    </ButtonDefault>
  );
};

export default Button;
