import React from "react";
import Styles from "./roadmapquatermobile.module.scss";
import { BsFillCircleFill } from "react-icons/bs";

function RoadmapQuaterMobile(data) {
  const points = data["data"];
  console.log(points);
  return (
    <div className={Styles.roadmapMobileContainer}>
      <table className={Styles.pointsTable}>
        {points.map((point, index) => (
          <tr key={index}>
            <td className={Styles.line}>
              <div className={Styles.pointer}>
                <BsFillCircleFill />
              </div>
            </td>
            <td className={Styles.text}>
              <span
                className={
                  "gradient__text " +
                  Styles.gradientText +
                  " " +
                  (point.milestone === "2" ? Styles.currentMilestone : "")
                }
              >
                Milestone-{point.milestone}
              </span>
              &nbsp; ({point.quater})
              <table>
                {point.points.map((item, index) => (
                  <tr className={Styles.points} key={index}>
                    <td className={Styles.bullet}>-</td>
                    <td>{item}</td>
                  </tr>
                ))}
              </table>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default RoadmapQuaterMobile;
