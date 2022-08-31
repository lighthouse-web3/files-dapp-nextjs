import React, { useEffect, useState } from "react";
import HomepageStyles from "../styles/Home.module.scss";
import {
  Header,
  Footer,
  Homebanner,
  Homepackage,
  Homebackedby,
  Homekeydiffrence,
  Homekeyfeatures,
  HomeEmail,
} from "../containers";

import { CookiesFloat, DiscordFloat, MetaData } from "../components";
import axios from "axios";
import { baseUrl } from "../utils/Data/config";

export const getStaticProps = async () => {
  let homepageData = null;
  try {
    const res = await axios.get(`${baseUrl}/homepage`);
    homepageData =
      res["status"] === 200
        ? res["data"]?.["data"]?.["attributes"]?.["data"]
        : null;
  } catch (error) {}
  return {
    props: {
      homepageData,
    },
  };
};

function HomePage({ homepageData }) {
  const [contentData, setContentData] = useState(homepageData);
  return (
    <div className={HomepageStyles.homepage}>
      {homepageData && (
        <>
          <MetaData />
          <div className="bg_pattern2"></div>
          <div className="bg_pattern3"></div>
          <div className="bg_pattern4"></div>
          <div className="bg_pattern5"></div>
          <Header />

          {contentData?.["banner"] && (
            <Homebanner contentData={contentData["banner"]} />
          )}

          {contentData?.["package"] && (
            <Homepackage contentData={contentData["package"]} />
          )}

          {contentData?.["keyFeatures"] && (
            <Homekeyfeatures contentData={contentData["keyFeatures"]} />
          )}

          {contentData?.["keyDiffrence"] && (
            <Homekeydiffrence contentData={contentData["keyDiffrence"]} />
          )}

          {contentData?.["backedBy"] && (
            <Homebackedby contentData={contentData["backedBy"]} />
          )}

          {contentData?.["email"] && (
            <HomeEmail contentData={contentData["email"]} />
          )}

          <Footer />
          <DiscordFloat />
          <CookiesFloat />
        </>
      )}
    </div>
  );
}

export default HomePage;
