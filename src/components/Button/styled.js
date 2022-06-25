import styled from "styled-components";
import { device } from "./../size/device";

export const ButtonDefault = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border-radius: ${({ bordeRadius }) => bordeRadius};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  box-shadow: ${({ boxShadow }) => boxShadow};
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

ButtonDefault.defaultProps = {
  width: "50%",
  height: "100%",
  color: "#000",
  background: "#fff",
  bordeRadius: "5px",
  border: "1px solid #000",
  cursor: "pointer",
  padding: "",
  margin: "",
};
