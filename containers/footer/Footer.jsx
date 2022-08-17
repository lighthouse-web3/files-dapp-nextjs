import React from "react";
import Styles from "./footer.module.scss";
import { MdLocationOn, MdMailOutline } from "react-icons/md";

import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { data } from "../../utils/Data/config";
const globalData = data["Global"];
const socialData = data["SocialLinks"];

function Footer() {
  const _navigate = useRouter();
  return (
    <div className={Styles.footerContainer + " section__padding"}>
      <div className={Styles.siteDetails}>
        <div className={Styles.siteMap}>
          <p className={Styles.fTitle}>Sitemap</p>
          <p>
            <a
              onClick={() => {
                _navigate.push("/");
              }}
            >
              Home
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                _navigate.push("/about");
              }}
            >
              About us
            </a>
          </p>
          <p>
            <a
              onClick={() => {
                _navigate.push("/faq");
              }}
            >
              FAQs
            </a>
          </p>
          {/* <p>
                      <a onClick={() => { _navigate.push('/career') }} >Careers</a>
                    </p> */}
        </div>
        <div className={Styles.policies}>
          <p className={Styles.fTitle}>Policies</p>
          <p>T&C</p>
          <p>Copyright</p>
        </div>
      </div>
      <div className={Styles.contactDetails}>
        <div className={Styles.set}>
          <MdLocationOn className={Styles.icon} /> <p>{globalData.address}</p>
        </div>
        <div className={Styles.set}>
          <MdMailOutline className={Styles.icon} /> <p>{globalData.email}</p>
        </div>
        <div className={Styles.set}>
          <FaTwitterSquare
            className={Styles.icon + " " + Styles.social}
            onClick={() => window.open(socialData.tweeter, "_blank")}
          />
          <FaGithubSquare
            className={Styles.icon + " " + Styles.social}
            onClick={() => window.open(socialData.github, "_blank")}
          />
          <FaLinkedin
            className={Styles.icon + " " + Styles.social}
            onClick={() => window.open(socialData.linkedin, "_blank")}
          />
          <FaDiscord
            className={Styles.icon + " " + Styles.social}
            onClick={() => window.open(socialData.discord, "_blank")}
          />
          <FaTelegram
            className={Styles.icon + " " + Styles.social}
            onClick={() => window.open(socialData.telegram, "_blank")}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
