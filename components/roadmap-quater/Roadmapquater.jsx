/* eslint-disable react/jsx-key */
import React from "react";
import Styles from "./roadmapquater.module.scss";
import { BsFillCircleFill, BsBox } from "react-icons/bs";
import { FaRegStickyNote } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";

function Roadmapquater({ quater, milestone, points, position }) {
  let icons = [
    <BsBox />,
    <FaRegStickyNote />,
    <SiHiveBlockchain />,
    <IoIosGitNetwork />,
  ];
  return (
    <div className={Styles.roadmapQuaterBox + ` ${position}`}>
      <p
        className={
          Styles.quaterName +
          " " +
          (milestone === "2" ? Styles.currentQuater : "")
        }
      >
        {quater}
      </p>

      {milestone === "2" ? (
        <div className={Styles.concentricCircle}>
          <BsFillCircleFill className={Styles.circle} />
        </div>
      ) : (
        <BsFillCircleFill className={Styles.circle} />
      )}

      <div className={Styles.textBox}>
        <div className={Styles.quaterTitle + " gradient__text"}>
          Milestone-{milestone}
        </div>
        <table>
          {points.map((point, index) => (
            <tr className={Styles.points} key={index}>
              <td className={Styles.bullet}>
                {icons[Math.floor(Math.random() * icons.length)]}
              </td>
              <td>{point}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Roadmapquater;
