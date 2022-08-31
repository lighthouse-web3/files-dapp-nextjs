import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MdUpdate,
  MdArrowBackIosNew,
  MdOutlineShare,
  MdOutlineContentCopy,
  MdSupervisedUserCircle,
} from "react-icons/md";

import {
  DiscordFloat,
  ImageBox,
  MetaData,
  RecentBlogCard,
} from "../../components";
import { Footer, Header } from "../../containers";
import { baseUrl, mediaUrl } from "../../utils/Data/config";
import ReactMarkdown from "react-markdown";
import { notify } from "../../utils/services/notification";
import { useRouter } from "next/router";
import Styles from "../../styles/viewBlog.module.scss";

const getBlogByID = async (blogs, id, setShowBlog, router) => {
  console.log("getblogBYID", blogs, id);
  let blog = blogs.filter((blog) => blog?.id === +id);
  console.log(blog, "selected Blog");
  if (blog.length > 0) {
    setShowBlog(blog[0]);
  } else {
    router.push("/blogs");
  }
};

const getSimilarBlogs = (currentBlog, blogs, setSimilarBlogs) => {
  let similarBlogs = blogs.filter((blog) => {
    return (
      blog?.attributes?.otherInfo?.category ===
      currentBlog?.attributes?.otherInfo?.category
    );
  });

  similarBlogs.length > 0 && setSimilarBlogs(similarBlogs);
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(window.location.href);
  notify("Link Copied", "success");
};

function ViewBlog() {
  const [allBlogs, setAllBlogs] = useState(null);
  const [showBlog, setShowBlog] = useState(null);
  const [similarBlogs, setSimilarBlogs] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const router = useRouter();

  const { params } = router.query;
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseUrl}/blogs?populate=*`);
        console.log(res);
        res["status"] === 200 && setAllBlogs(res["data"]?.["data"]);
        console.log(params);
        await getBlogByID(
          res["data"]?.["data"],
          params[0],
          setShowBlog,
          router
        );
        setShowPage(true);
      } catch (error) {}
    })();
  }, [params]);

  useEffect(() => {
    showBlog && getSimilarBlogs(showBlog, allBlogs, setSimilarBlogs);
  }, [showBlog]);

  return (
    <div className={Styles.viewBlog}>
      {showPage && (
        <>
          <MetaData
            title={showBlog?.attributes?.Seo?.metaTitle}
            description={
              showBlog?.attributes?.Seo?.metaDiscription?.slice(0, 100) + "..."
            }
            image={
              mediaUrl + showBlog?.attributes?.coverImage?.data?.attributes?.url
            }
            url={window.location.href}
          />
          <div className="bg_pattern4"></div>
          <div className="bg_pattern5"></div>
          <Header />
          <div className={Styles.viewBlog__title}>
            <p
              className={Styles.icon + " ptr"}
              onClick={() => {
                router.push(`/blogs`);
              }}
            >
              <MdArrowBackIosNew />
            </p>

            <p className="gradient__text">View Blogs</p>
          </div>
          <div className={Styles.viewBlog__container + " section__padding"}>
            <div className={Styles.recent}>
              {similarBlogs && (
                <RecentBlogCard title={"Similar Blogs"} blogs={similarBlogs} />
              )}
            </div>
            {showBlog && (
              <div className={Styles.blogBox}>
                <div className={Styles.card}>
                  <div className={Styles.img}>
                    <ImageBox
                      src={
                        mediaUrl +
                        showBlog?.attributes?.coverImage?.data?.attributes?.url
                      }
                      alt="blogImage"
                      layout="fill"
                    />
                  </div>

                  <p className={Styles.title}>{showBlog?.attributes?.title}</p>

                  <div className={Styles.infobar}>
                    <span className={Styles.date}>
                      {" "}
                      <MdUpdate />
                      &nbsp; {showBlog?.attributes?.publishedAt?.split("T")[0]}
                    </span>

                    <div className={Styles.share}>
                      <span
                        onClick={() => {
                          copyToClipboard();
                        }}
                      >
                        <MdOutlineContentCopy />
                        Copy
                      </span>
                    </div>
                  </div>

                  <div className={Styles.content}>
                    <ReactMarkdown
                      linkTarget={"_blank"}
                      // eslint-disable-next-line react/no-children-prop
                      children={showBlog?.attributes?.description?.replaceAll(
                        "/uploads/",
                        `${mediaUrl}/uploads/`
                      )}
                    />
                  </div>

                  <div className={Styles.author}>
                    <MdSupervisedUserCircle />
                    &nbsp;
                    {showBlog?.attributes?.author}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Footer />
          <DiscordFloat />
        </>
      )}
    </div>
  );
}

export default ViewBlog;
