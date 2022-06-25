import styled from "styled-components";
import { device } from "./../size/device";

export const ImgDefault = styled.img`
  background-size: ${({ backgroundSize }) => backgroundSize};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ boxShadow }) => boxShadow};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  display: ${({ display }) => display};

  :hover {
    background: ${({ hoverBackground }) => hoverBackground};
  }

  @media ${device.tablet} {
    width: ${({ widthTablet }) => widthTablet};
    height: ${({ heightTablet }) => heightTablet};
    margin: ${({ marginTablet }) => marginTablet};
    padding: ${({ paddingTablet }) => paddingTablet};
    position: ${({ positionTablet }) => positionTablet};
    top: ${({ topTablet }) => topTablet};
    left: ${({ leftTablet }) => leftTablet};
    right: ${({ rightTablet }) => rightTablet};
    bottom: ${({ bottomTablet }) => bottomTablet};
  }

  @media ${device.mobile425} {
    width: ${({ widthMobileIntermediary }) => widthMobileIntermediary};
    height: ${({ heightMobileIntermediary }) => heightMobileIntermediary};
    margin: ${({ marginMobileIntermediary }) => marginMobileIntermediary};
    padding: ${({ paddingMobileIntermediary }) => paddingMobileIntermediary};
    position: ${({ positionMobileIntermediary }) => positionMobileIntermediary};
    top: ${({ topMobileIntermediary }) => topMobileIntermediary};
    left: ${({ leftMobileIntermediary }) => leftMobileIntermediary};
    right: ${({ rightMobileIntermediary }) => rightMobileIntermediary};
    bottom: ${({ bottomMobileIntermediary }) => bottomMobileIntermediary};
  }
`;
