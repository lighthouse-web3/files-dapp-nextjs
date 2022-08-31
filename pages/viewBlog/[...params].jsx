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

const getSimilarBlogs = (currentBlog, blogs, setSimilarBlogs) => {
  let similarBlogs = blogs.filter((blog) => {
    return (
      blog?.attributes?.otherInfo?.category === currentBlog?.otherInfo?.category
    );
  });

  similarBlogs.length > 0 && setSimilarBlogs(similarBlogs);
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(window.location.href);
  notify("Link Copied", "success");
};

export const getStaticPaths = async () => {
  const res = await axios.get(`${baseUrl}/blogs?populate=*`);
  let allBlogs = res["status"] === 200 ? res["data"]?.["data"] : null;

  const paths = allBlogs.map((blog) => {
    return {
      params: {
        params: [
          blog["id"] + "",
          blog?.attributes?.title?.replaceAll(" ", "-"),
        ],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.params[0];
  let blogData = "null";
  try {
    const res = await axios.get(`${baseUrl}/blogs/${id}?populate=*`);
    blogData =
      res["status"] === 200 ? res["data"]?.["data"]?.["attributes"] : null;
  } catch (error) {}
  return {
    props: {
      blogData,
    },
  };
};

function ViewBlog({ blogData }) {
  const [showBlog, setShowBlog] = useState(blogData);
  const [similarBlogs, setSimilarBlogs] = useState([]);
  const router = useRouter();

  const { params } = router.query;
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseUrl}/blogs?populate=*`);
        res["status"] === 200 &&
          getSimilarBlogs(showBlog, res["data"]?.["data"], setSimilarBlogs);
      } catch (error) {}
    })();
  }, [params]);

  return (
    <div className={Styles.viewBlog}>
      {blogData && (
        <>
          <MetaData
            title={showBlog?.Seo?.metaTitle}
            description={showBlog?.Seo?.metaDiscription?.slice(0, 100) + "..."}
            image={mediaUrl + showBlog?.coverImage?.data?.attributes?.url}
            url={"https://www.lighthouse.storage/"}
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
                        mediaUrl + showBlog?.coverImage?.data?.attributes?.url
                      }
                      alt="blogImage"
                      layout="fill"
                    />
                  </div>

                  <p className={Styles.title}>{showBlog?.title}</p>

                  <div className={Styles.infobar}>
                    <span className={Styles.date}>
                      {" "}
                      <MdUpdate />
                      &nbsp; {showBlog?.publishedAt?.split("T")[0]}
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
                      children={showBlog?.description?.replaceAll(
                        "/uploads/",
                        `${mediaUrl}/uploads/`
                      )}
                    />
                  </div>

                  <div className={Styles.author}>
                    <MdSupervisedUserCircle />
                    &nbsp;
                    {showBlog?.author}
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
