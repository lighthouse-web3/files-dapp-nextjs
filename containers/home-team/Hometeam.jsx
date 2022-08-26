import React from "react";
import Styles from "./hometeam.module.scss";
import { Teamcard } from "../../components";

function Hometeam({ contentData }) {
  const teamArr = contentData.members;
  return (
    <div className={"section__padding " + Styles.hometeamContainer} id="team">
      <div className={Styles.title}>
        <p className={"gradient__text mainTitle " + Styles.titleText}>
          {contentData.title}
        </p>

        <p
          className="mainDescription"
          dangerouslySetInnerHTML={{ __html: contentData.description }}
        ></p>
      </div>

      <div className={Styles.teamMembers}>
        {teamArr.map((member, index) => (
          <Teamcard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Hometeam;
