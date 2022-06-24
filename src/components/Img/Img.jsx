import React from "react";
import { ImgDefault } from "./styled";

const Img = ({
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
  width,
  height,
  ...restProps
}) => {
  return (
    <ImgDefault
      width={width}
      height={height}
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
    />
  );
};

export default Img;
