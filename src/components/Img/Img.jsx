import React from "react";
import { ImgDefault } from "./styled";

const Img = ({
  children,
  fontSize,
  color,
  margin,
  cursor,
  padding,
  background,
  borderRadius,
  border,
  backgroundSize,
  alt,
  src,
  ...restProps
}) => {
  return (
    <ImgDefault
      src={src}
      alt={alt}
      backgroundSize={backgroundSize}
      fontSize={fontSize}
      margin={margin}
      color={color}
      cursor={cursor}
      padding={padding}
      background={background}
      borderRadius={borderRadius}
      border={border}
      {...restProps}
    >
      {children}
    </ImgDefault>
  );
};

export default Img;
