import styled from "styled-components";

export const DefaultTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight};
  width: ${({ width }) => width};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;

DefaultTitle.defaultProps = {
  color: "#1d1d1d",
};
