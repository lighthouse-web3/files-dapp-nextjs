import React from "react";
import { MdNavigateNext } from "react-icons/md";
import Styles from "./DocContainer.module.scss";

const cards = [
  {
    title: "Introduction",
    description: "Learn about lighthouse and how it is diffrent",
    link: "https://lighthouse-storage.gitbook.io/lighthouse/",
  },
  {
    title: "CLI Commands",
    description:
      "Learn to install the package globally on your system using our npm package",
    link: "https://lighthouse-storage.gitbook.io/lighthouse/cli-tool/cli-commands",
  },
  {
    title: "Examples",
    description: "Go through our detailed code examples",
    link: "https://lighthouse-storage.gitbook.io/lighthouse/javascript/code-examples",
  },
];

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
        {cards.map((card, index) => (
          <div className={Styles.card} key={index}>
            <div className={Styles.cardBorder}></div>
            <div className={Styles.content}>
              <div>
                <p className={Styles.title}>{card.title}</p>
                <p className={Styles.description}>{card.description}</p>
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
