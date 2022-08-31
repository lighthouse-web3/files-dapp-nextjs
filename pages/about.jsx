import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Hometeam,
  Homeroadmap,
  AboutAngels,
} from "../containers";
import Styles from "../styles/About.module.scss";
import { DiscordFloat, MetaData } from "../components";
import axios from "axios";
import { baseUrl } from "../utils/Data/config";

export const getStaticProps = async () => {
  let aboutPageData = null;
  try {
    const res = await axios.get(`${baseUrl}/about-page`);
    aboutPageData =
      res["status"] === 200
        ? res["data"]?.["data"]?.["attributes"]?.["data"]
        : null;
  } catch (error) {}
  return {
    props: {
      aboutPageData,
    },
  };
};

function AboutPage({ aboutPageData }) {
  const [contentData, setContentData] = useState(aboutPageData);

  return (
    <div className={Styles.about}>
      {aboutPageData && (
        <>
          <MetaData />
          <div className="bg_pattern2"></div>
          <div className="bg_pattern4"></div>
          <div className="bg_pattern5"></div>
          <Header />
          {contentData?.["team"] && (
            <Hometeam contentData={contentData["team"]} />
          )}
          {contentData?.["roadmapData"] && (
            <Homeroadmap contentData={contentData["roadmapData"]} />
          )}
          {contentData?.["angel"] && (
            <AboutAngels contentData={contentData["angel"]} />
          )}

          {/* {
                        contentData['testimonial'] && <Testimonials contentData={contentData['testimonial']} />
                    } */}
          {/* {contentData["pricing"] && (
            <Pricing contentData={contentData["pricing"]} />
          )} */}
          <Footer />
          <DiscordFloat />
        </>
      )}
    </div>
  );
}

export default AboutPage;
