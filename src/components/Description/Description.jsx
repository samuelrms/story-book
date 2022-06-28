import React from "react";
import { DescriptionDefault } from "./styled";

const Description = ({
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
    <DescriptionDefault
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
    </DescriptionDefault>
  );
};

export default Description;
