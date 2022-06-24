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
      {...restProps}
    >
      {children}
    </ContentDefault>
  );
};

export default Content;
