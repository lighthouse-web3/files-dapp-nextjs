import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/Data/config";
import { DiscordFloat } from "../components";
import { FAQContainer, Footer, Header } from "../containers";
import Styles from "../styles/faq.module.scss";

function FAQPage() {
  const [contentData, setContentData] = useState([]);
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseUrl}/faqs`);
        res["status"] === 200 && setContentData(res?.["data"]?.["data"]);
        console.log(contentData, "CONTENT DATA");
        setShowPage(true);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className={Styles.FAQPage}>
      {showPage && (
        <>
          <div className="bg_pattern2"></div>
          <div className="bg_pattern3"></div>
          <div className="bg_pattern4"></div>
          <div className="bg_pattern5"></div>
          <Header />
          {contentData && <FAQContainer contentData={contentData} />}
          <Footer />
          <DiscordFloat />
        </>
      )}
    </div>
  );
}

export default FAQPage;
