import React from "react";
import Styles from "./AboutAngels.module.scss";
import Angelcard from "../../components/angel-card/AngelCard";

function AboutAngels({ contentData }) {
  const teamArr = contentData.angels;
  return (
    <div className={"section__padding " + Styles.angelsContainer} id="team">
      <div className={Styles.title}>
        <p className="gradient__text mainTitle">{contentData.title}</p>
        <p
          className="mainDescription"
          dangerouslySetInnerHTML={{ __html: contentData.description }}
        ></p>
      </div>

      <div className={Styles.angels}>
        <div className={Styles.teamMembers}>
          {teamArr.map((member, index) => (
            <Angelcard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutAngels;
