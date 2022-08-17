import Image from "next/image";
import React from "react";
import { mediaUrl } from "../../utils/Data/config";
import Styles from "./homebanner.module.scss";
import { ImageBox } from "../../components";

function Homebanner({ contentData }) {
  return (
    <div className={"section__padding " + Styles.bannerContainer} id="home">
      <div className={Styles.bannerOverlay}></div>
      <div className={Styles.homeBanner}>
        <div className={Styles.title}>
          <p
            className={"gradient__text " + Styles.titleText}
            dangerouslySetInnerHTML={{ __html: contentData["title"] }}
          ></p>

          <p
            className={Styles.descriptionText}
            dangerouslySetInnerHTML={{ __html: contentData["description"] }}
          ></p>
        </div>
      </div>

      <div className={Styles.bannerImage}>
        <span className={Styles.imageContainer}>
          <ImageBox
            src={mediaUrl + contentData["image"]}
            alt="BannerImage"
            layout={"fill"}
            width={"100%"}
          />
        </span>
      </div>
    </div>
  );
}

export default Homebanner;
