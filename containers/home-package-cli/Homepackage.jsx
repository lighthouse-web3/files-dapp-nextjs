import { React, useState } from "react";
import TypeAnimation from "react-type-animation";
import { ImageBox } from "../../components";
import { mediaUrl } from "../../utils/Data/config";
import Styles from "./homepackage.module.scss";

function Homepackage({ contentData }) {
  const [currentSelection, setSelection] = useState("install");
  return (
    <div className={"section__padding " + Styles.homePackage} id="cli">
      <div className={Styles.homepackageOverlay}></div>
      <div className={Styles.title}>
        <p
          className={"gradient__text " + Styles.titleText}
          dangerouslySetInnerHTML={{ __html: contentData.title }}
        ></p>

        <p
          className={Styles.descriptionText}
          dangerouslySetInnerHTML={{ __html: contentData.description }}
        ></p>

        <div className={Styles.buttonContainer}>
          {contentData?.commands.map((item, index) => (
            <button
              className={currentSelection === item.section ? Styles.active : ""}
              key={index}
              onClick={() => {
                setSelection(item.section);
              }}
            >
              {item.section}
            </button>
          ))}
        </div>
        <div className={Styles.codeTyping}>
          $ &nbsp;
          {contentData?.commands.map((item, index) => {
            return (
              currentSelection === item.section && (
                <TypeAnimation
                  key={index}
                  cursor={true}
                  sequence={[item.command, 3000]}
                  wrapper="a"
                  repeat={Infinity}
                />
              )
            );
          })}
        </div>
      </div>

      <div className={Styles.bannerImage}>
        {contentData?.commands.map(
          (item, index) =>
            currentSelection === item.section && (
              <ImageBox
                src={mediaUrl + item.image}
                key={index}
                alt="commandlineImage"
                layout={"fill"}
                width="70%"
              />
            )
        )}
      </div>
    </div>
  );
}

export default Homepackage;
