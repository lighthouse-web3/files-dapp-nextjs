import ImageBox from "../ImageBox/ImageBox";
import React from "react";
import { mediaUrl } from "../../utils/Data/config";
import Styles from "./featurepoint.module.scss";

function featurepoint({ image, title, content, index }) {
  const { innerWidth: width } = window;

  return (
    <div
      className={`${Styles.featurepointContainer}  ${
        index % 2 === 0 ? Styles.containerRow : Styles.containerRowReverse
      }`}
    >
      <div className={Styles.imageContainer}>
        <ImageBox
          src={mediaUrl + image}
          layout="fill"
          alt="feature_image"
          width={"50%"}
        />
      </div>
      <div className={Styles.textContainer}>
        <div
          className={Styles.title}
          style={
            width > 800
              ? index % 2 === 0
                ? { textAlign: "right" }
                : { textAlign: "left" }
              : { textAlign: "center" }
          }
        >
          {title}
        </div>
        <div
          className={Styles.description}
          style={
            width > 800
              ? index % 2 === 0
                ? { textAlign: "right" }
                : { textAlign: "left" }
              : { textAlign: "center" }
          }
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default featurepoint;
