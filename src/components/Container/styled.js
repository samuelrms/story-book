import styled from "styled-components";
import { device } from "./../size/device";

export const ContainerDefault = styled.section`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: ${({ bordeRadius }) => bordeRadius};
  cursor: ${({ cursor }) => cursor};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  display: ${({ display }) => display};

  :hover {
    background: ${({ hoverBackground }) => hoverBackground};
    border: ${({ hoverBorder }) => hoverBorder};
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
