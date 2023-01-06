import React from "react";
import { DiscordFloat, MetaData } from "../components";
import { Footer, Header } from "../containers";
import Styles from "../styles/pricing.module.scss";

function pricing() {
  return (
    <div className={""}>
      {
        <>
          <MetaData />

          <div className="bg_pattern4"></div>

          <Header />

          <div className={Styles.pricingBox}>Coming Soon</div>

          <Footer />
          <DiscordFloat />
        </>
      }
    </div>
  );
}

export default pricing;
