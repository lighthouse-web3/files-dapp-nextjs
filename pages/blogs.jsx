import axios from "axios";
import React, { useEffect, useState } from "react";
import { DiscordFloat, MetaData } from "../components";
import { Footer, Header, BlogList, BlogRecent } from "../containers";
import { baseUrl } from "../utils/Data/config";
import Styles from "../styles/blogs.module.scss";

function Blogs() {
  const [allBlogs, setAllBlogs] = useState(null);
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseUrl}/blogs?populate=*`);
        res["status"] === 200 && setAllBlogs(res["data"]?.["data"]);

        setShowPage(true);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className={Styles.Blogs}>
      {showPage && (
        <>
          <MetaData />
          <div className={"bg_pattern2 " + Styles.Blogs__pattern2}></div>
          <div className="bg_pattern4"></div>
          <div className="bg_pattern5"></div>
          <Header />
          <div className={Styles.Blogs__title}>
            <p className="gradient__text">Blogs</p>
          </div>
          <div className={Styles.Blogs__container + " section__padding"}>
            <div className={Styles.recent}>
              <BlogRecent allBlogs={allBlogs} />
            </div>
            <div className={Styles.list}>
              <BlogList allBlogs={allBlogs} />
            </div>
          </div>
          <Footer />
          <DiscordFloat />
        </>
      )}
    </div>
  );
}

export default Blogs;
