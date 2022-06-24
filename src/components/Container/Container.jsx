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
  ...restProps
}) => {
  return (
    <ContainerDefault
      height={height}
      width={width}
      margin={margin}
      background={background}
      padding={padding}
      border={border}
      boxShadow={boxShadow}
      {...restProps}
    >
      {children}
    </ContainerDefault>
  );
};

export default Container;
