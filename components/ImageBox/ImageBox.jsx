import Image from "next/image";
import React from "react";
import Styles from "./ImageBox.module.scss";

function ImageBox({ width, maxWidth, height, maxHeight, alt, ...rest }) {
  let dimensions = {};
  width ? (dimensions["width"] = width) : "100%";
  maxWidth ? (dimensions["maxWidth"] = maxWidth) : "100%";
  height ? (dimensions["height"] = height) : "unset";
  maxHeight ? (dimensions["maxHeight"] = maxHeight) : "unset";

  return (
    <div className={Styles.imageContainer} style={dimensions}>
      <Image className={Styles.image} {...rest} alt={alt} />
    </div>
  );
}

export default ImageBox;
