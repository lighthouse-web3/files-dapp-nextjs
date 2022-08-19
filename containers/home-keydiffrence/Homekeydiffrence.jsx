import React from "react";
import Styles from "./homekeydiffrence.module.scss";
import { BsFillCircleFill } from "react-icons/bs";
import { ImageBox } from "../../components";
import bankImage from "../../public/bankImage.png";

function Homekeydiffrence({ contentData }) {
  const points = contentData;
  return (
    <div className={Styles.keyDifferenceContainer}>
      <div className={Styles.title + " section__padding"}>
        <p className={"gradient__text mainTitle"}>
          How are we different from existing storage systems?
        </p>
      </div>

      <div className={Styles.bannerImageContainer}>
        <ImageBox
          src="/bankImage.png"
          layout="fill"
          alt="iamge"
          className={Styles.bannerImage}
        />
        <div className={Styles.overlay}></div>
      </div>

      <div className={"section__padding " + Styles.tableContainer}>
        <table className={Styles.pointsTable}>
          <tbody>
            {points.map((point, index) => (
              <tr key={index}>
                <td className={Styles.line}>
                  <div className={Styles.pointer}>
                    <BsFillCircleFill />
                  </div>
                </td>
                <td className={Styles.text}>{point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homekeydiffrence;
