import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/Data/config";
import { DiscordFloat, MetaData } from "../components";
import { DocContainer, Footer, Header } from "../containers";
import Styles from "../styles/documentation.module.scss";
import DocContainer2 from "../containers/Doc-container2/DocContainer";
import DiscordBox from "../components/discordBox/DiscordBox";

export const getStaticProps = async () => {
  let documentation = null;
  try {
    const res = await axios.get(`${baseUrl}/documentation`);
    documentation = res["status"] === 200 ? res?.["data"]?.["data"] : "null";
  } catch (error) {}
  return {
    props: {
      documentation,
    },
  };
};

function Documentation({ documentation }) {
  const [contentData, setContentData] = useState("documentation");
  console.log(documentation, "Documentation");

  return (
    <div className={Styles.Documentation}>
      {contentData && (
        <>
          <MetaData />
          <div className="bg_pattern2"></div>
          <div className="bg_pattern3"></div>
          <div className="bg_pattern4"></div>
          <div className="bg_pattern5"></div>
          <Header />
          {contentData && <DocContainer contentData={contentData} />}
          {contentData && <DocContainer2 contentData={contentData} />}
          {/* {contentData && (
            <div className="section__padding">
              <DiscordBox contentData={contentData} />
            </div>
          )} */}
          <Footer />
          <DiscordFloat />
        </>
      )}
    </div>
  );
}

export default Documentation;
