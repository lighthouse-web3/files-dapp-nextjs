import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Hometeam,
  Homeroadmap,
  AboutAngels,
} from "../containers";
import Styles from "../styles/About.module.scss";
import { DiscordFloat } from "../components";
import axios from "axios";
import { baseUrl } from "../utils/Data/config";

function AboutPage() {
  const [contentData, setContentData] = useState(null);
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseUrl}/about-page`);
        res["status"] === 200 &&
          setContentData(res["data"]?.["data"]?.["attributes"]?.["data"]);
        console.log(contentData);
        setShowPage(true);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className={Styles.about}>
      {showPage && (
        <>
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
