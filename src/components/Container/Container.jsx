import React from "react";
import { ContainerDefault } from "./styled";

const Container = ({
  children,
  width,
  height,
  margin,
  background,
  padding,
  border,
  boxShadow,
  color,
  bordeRadius,
  cursor,
  hoverBackground,
  hoverColor,
  hoverBorder,
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
  className,
  ...restProps
}) => {
  return (
    <ContainerDefault
      className={className}
      height={height}
      width={width}
      margin={margin}
      background={background}
      padding={padding}
      border={border}
      boxShadow={boxShadow}
      color={color}
      bordeRadius={bordeRadius}
      cursor={cursor}
      hoverBackground={hoverBackground}
      hoverBorder={hoverBorder}
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
    </ContainerDefault>
  );
};

export default Container;
