import React from "react";
import Styles from "./DocContainer.module.scss";

function DocContainer() {
  return (
    <div className={Styles.DocContainer + " section__padding"} id="doc">
      <div className={Styles.title}>
        <p className="gradient__text mainTitle">Lighthouse Documentation</p>
        <p className="mainDescription">
          Lighthouse is a permanent decentralized file storage protocol that
          allows the ability to pay once and store forever
        </p>
      </div>

      <div className={Styles.cardContainer + " section__padding"}>
        <div className={Styles.card}>
          <div className={Styles.title}>Concept</div>
        </div>
        <div className={Styles.card}></div>
        <div className={Styles.card}></div>
      </div>
    </div>
  );
}

export default DocContainer;
