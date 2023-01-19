import React from "react";
import { MdNavigateNext } from "react-icons/md";
import Styles from "./DocContainer.module.scss";

function DocContainer({ contentData }) {
  return (
    <div className={Styles.DocContainer + " section__padding"} id="doc">
      <div className={Styles.title}>
        <p className="gradient__text mainTitle">{contentData?.title}</p>
        <p className="mainDescription">{contentData?.subtitle}</p>
      </div>

      <div className={Styles.cardContainer + " section__padding"}>
        {contentData?.documentationCard.map((card, index) => (
          <div
            className={Styles.card}
            key={index}
            onClick={() => {
              window.open(card.link);
            }}
          >
            <div className={Styles.cardBorder}></div>
            <div className={Styles.content}>
              <div>
                <p className={Styles.title}>{card.title}</p>
                <p className={Styles.description}>{card.subtitle}</p>
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={Styles.next + " ptr"}
              >
                Know More &nbsp;
                <MdNavigateNext />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocContainer;
