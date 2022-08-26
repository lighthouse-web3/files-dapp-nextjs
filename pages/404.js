import React from "react";
import Styles from "../styles/404.module.scss";
import TypeAnimation from "react-type-animation";
import { ImageBox } from "../components";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className={Styles.PageNotFound}>
      <div className="bg_pattern"></div>
      <div className={Styles.logoContainer}>
        <ImageBox
          src="/logo.png"
          width={"100px"}
          height={"100px"}
          alt="logoPic"
          layout="fill"
        />
      </div>
      <div className={Styles.title}>
        <p className={"gradient__text " + Styles.title__text}>404</p>
        <TypeAnimation
          cursor={true}
          className={Styles.typeAnimation}
          sequence={["Page Not Found", 3000]}
          wrapper="a"
          repeat={Infinity}
        />
      </div>

      <div className={Styles.goBack}>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
