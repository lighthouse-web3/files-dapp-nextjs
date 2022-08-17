import React from "react";
import Image from "next/image";
import Styles from "./AngelCard.module.scss";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterSquare } from "react-icons/ai";
import { mediaUrl } from "../../utils/Data/config";

function Angelcard({ name, designation, linkedin, tweeter, image }) {
  return (
    <div className="angel_card_container">
      <Image src={mediaUrl + image} alt="" />

      <div className="member_info">
        <p className="member_name">{name}</p>
        <div className="member_designation">{designation}</div>

        <div className="icons">
          {linkedin && (
            <IoLogoLinkedin
              className="social_icon"
              onClick={() => window.open(linkedin, "_blank")}
            />
          )}

          {tweeter && (
            <AiFillTwitterSquare
              className="social_icon"
              onClick={() => window.open(tweeter, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Angelcard;
