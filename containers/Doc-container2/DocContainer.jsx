import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Styles from "./DocContainer.module.scss";

const repos = [
  {
    name: "lighthouse-web3/files-dapp",
    link: "https://github.com/lighthouse-web3/files-dapp",
  },
];

function DocContainer2() {
  return (
    <div className={Styles.DocContainer2 + " section__padding"}>
      <div className={Styles.listContainer + " " + Styles.left}>
        <div className={Styles.title}>Developers Links</div>

        {repos.map((repo, index) => (
          <div
            className={Styles.box}
            key={index}
            onClick={() => {
              window.open(repo.link, "_blank");
            }}
          >
            <div className={Styles.icon}>
              <AiFillGithub />
            </div>
            <div className={Styles.link}>{repo.name}</div>
          </div>
        ))}
      </div>
      <div className={Styles.seprator}></div>
      <div className={Styles.listContainer + " " + Styles.right}>
        <div className={Styles.title}>Resources</div>
        {repos.map((repo, index) => (
          <div
            className={Styles.box}
            key={index}
            onClick={() => {
              window.open(repo.link, "_blank");
            }}
          >
            <div className={Styles.link}>{repo.name}</div>
            <div className={Styles.icon} style={{ marginLeft: "10px" }}>
              <AiFillGithub />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocContainer2;
