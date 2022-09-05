import React from "react";
import { Featurepoint } from "../../components";
import Styles from "./homekeyfeatures.module.scss";

function Homekeyfeatures({ contentData }) {
  const features = contentData;

  return (
    <div className={"section__padding " + Styles.homeKeyfeatures} id="features">
      {console.log(features)}
      <div className={Styles.title}>
        <p className={"gradient__text mainTitle"}>Key Features</p>
        {features.map((point, arrIndex) => {
          point["index"] = arrIndex;
          return <Featurepoint key={arrIndex} {...point} />;
        })}
      </div>
    </div>
  );
}

export default Homekeyfeatures;
