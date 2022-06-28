import React from "react";
import { SubTitleDefault } from "./styled";

const SubTitle = ({
  children,
  fontSize,
  color,
  margin,
  cursor,
  padding,
  background,
  borderRadius,
  border,
  fontWeight,
  width,
  letterSpacing,
  textAlign,
  className,
  ...restProps
}) => {
  return (
    <SubTitleDefault
      className={className}
      letterSpacing={letterSpacing}
      fontSize={fontSize}
      margin={margin}
      color={color}
      cursor={cursor}
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      border={border}
      fontWeight={fontWeight}
      width={width}
      textAlign={textAlign}
      {...restProps}
    >
      {children}
    </SubTitleDefault>
  );
};

export default SubTitle;
