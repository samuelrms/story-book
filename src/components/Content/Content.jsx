import React from "react";
import { ContentDefault } from "./styled";

const Content = ({
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
    <ContentDefault
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
    </ContentDefault>
  );
};

export default Content;
