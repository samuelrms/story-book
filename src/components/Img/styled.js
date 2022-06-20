import styled from "styled-components";

export const ImgDefault = styled.img`
  background-size: ${({ backgroundSize }) => backgroundSize};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
