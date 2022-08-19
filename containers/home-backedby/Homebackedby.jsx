import React from "react";
import { ImageBox } from "../../components";
import { mediaUrl } from "../../utils/Data/config";
import Styles from "./homebackedby.module.scss";

function Homebackedby({ contentData }) {
  const organisationLogos = contentData.logos;
  console.log(organisationLogos);
  return (
    <div className={"section__padding " + Styles.backedByContainer}>
      <div className={Styles.title}>
        <p className={"gradient__text mainTitle"}>{contentData.title}</p>

        <p
          className="mainDescription"
          dangerouslySetInnerHTML={{ __html: contentData.description }}
        ></p>
      </div>

      <div className={Styles.logoContainer}>
        {organisationLogos.map((logo, index) => (
          <div className={Styles.orgLogo} key={index}>
            <ImageBox
              src={mediaUrl + logo}
              layout="fill"
              alt="feature_image"
              width={"100%"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homebackedby;
