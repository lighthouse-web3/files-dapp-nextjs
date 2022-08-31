import React, { useEffect, useState } from "react";
import { Roadmapquater, RoadmapQuaterMobile } from "../../components";

import Styles from "./homeroadmap.module.scss";

//  componentDidMount() {
//   console.log('window.innerHeight', window.innerHeight);
// }

function Homeroadmap({ contentData }) {
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setWidth(window["innerWidth"]);
  }, []);

  const roadmapData = contentData;
  return (
    <div className={Styles.roadmapContainer} id="roadmap">
      <div className={"section__padding_x " + Styles.title}>
        <p className="gradient__text mainTitle">Roadmap</p>
      </div>

      {width > 900 && (
        <div className={Styles.roadmapLineContainer}>
          <div className={"section__padding_x " + Styles.upper}>
            <div className={Styles.quaterContainer + " " + Styles.margin20}>
              <Roadmapquater {...roadmapData[1]} />
            </div>
            <div className={Styles.quaterContainer + " " + Styles.margin20}>
              <Roadmapquater {...roadmapData[3]} />
            </div>
          </div>

          <div className={Styles.roadmapLine}></div>

          <div className={"section__padding_x " + Styles.lower}>
            <div className={Styles.quaterContainer}>
              <Roadmapquater {...roadmapData[0]} />
            </div>
            <div className={Styles.quaterContainer + " " + Styles.margin20}>
              <Roadmapquater {...roadmapData[2]} />
            </div>
            <div className={Styles.quaterContainer + " " + Styles.margin20}>
              <Roadmapquater {...roadmapData[4]} />
            </div>
          </div>
        </div>
      )}
      {width < 900 && (
        <div className="section__padding_x">
          <RoadmapQuaterMobile {...{ data: roadmapData }} />
        </div>
      )}
    </div>
  );
}

export default Homeroadmap;
