import styled from "styled-components";

export const ContentDefault = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  border: ${({ boder }) => boder};
  box-shadow: ${({ boxShadow }) => boxShadow};
`;
