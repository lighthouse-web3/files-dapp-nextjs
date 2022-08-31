import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/Data/config";
import { DiscordFloat, MetaData } from "../components";
import { FAQContainer, Footer, Header } from "../containers";
import Styles from "../styles/faq.module.scss";

export const getStaticProps = async () => {
  let faqs = null;
  try {
    const res = await axios.get(`${baseUrl}/faqs`);
    faqs = res["status"] === 200 ? res?.["data"]?.["data"] : null;
  } catch (error) {}
  return {
    props: {
      faqs,
    },
  };
};

function FAQPage({ faqs }) {
  const [contentData, setContentData] = useState(faqs);

  return (
    <div className={Styles.FAQPage}>
      {faqs && (
        <>
          <MetaData />
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
