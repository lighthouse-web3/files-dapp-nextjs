import React from "react";
import Image from "next/image";
import Styles from "./AngelCard.module.scss";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { mediaUrl } from "../../utils/Data/config";
import ImageBox from "../ImageBox/ImageBox";

function Angelcard({ name, designation, linkedin, tweeter, image }) {
  return (
    <div className={Styles.angelCardContainer}>
      <span className={Styles.img}>
        <ImageBox
          src={mediaUrl + image}
          style={{ borderRadius: "50%" }}
          alt="angelpic"
          layout="fill"
        />
      </span>

      <div className={Styles.memberInfo}>
        <p className={Styles.memberName}>{name}</p>
        <div className={Styles.memberDesignation}>{designation}</div>

        <div className={Styles.icons}>
          {linkedin && (
            <IoLogoLinkedin
              className={Styles.socialIcon}
              onClick={() => window.open(linkedin, "_blank")}
            />
          )}

          {tweeter && (
            <AiFillTwitterSquare
              className={Styles.socialIcon}
              onClick={() => window.open(tweeter, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Angelcard;
