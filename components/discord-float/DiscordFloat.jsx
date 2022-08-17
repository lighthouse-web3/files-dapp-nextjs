import React from "react";
import Styles from "./discordfloat.module.scss";

import { FaDiscord } from "react-icons/fa";

function DiscordFloat() {
  return (
    <div
      className={Styles.DiscordFloat}
      onClick={() =>
        window.open("https://discord.com/invite/c4a4CGCdJG", "_blank")
      }
    >
      <div className={Styles.icon}>
        <FaDiscord />
      </div>
      <div className={Styles.text}>
        <p>Connect with us on discord</p>
      </div>
    </div>
  );
}

export default DiscordFloat;
