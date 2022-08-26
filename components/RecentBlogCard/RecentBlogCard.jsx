import React from "react";
import { MdUpdate } from "react-icons/md";
import Styles from "./RecentBlogCard.module.scss";
function RecentBlogCard({ title, blogs }) {
  return (
    <div className={Styles.RecentBlogCard}>
      <div className={Styles.RecentBlogCard__title}>{title}</div>
      <div className={Styles.RecentBlogCard__listContainer}>
        {blogs.map((blog, index) => (
          <div
            className={Styles.blogCard + " ptr"}
            key={index}
            onClick={() => {
              window.open(
                `/viewBlog/${blog?.id}/${blog?.attributes?.title?.replaceAll(
                  " ",
                  "-"
                )}`,
                "_blank"
              );
            }}
          >
            <p className={Styles.title}>{blog?.attributes?.title}</p>
            <p className={Styles.date}>
              <MdUpdate />
              &nbsp; {blog?.attributes?.publishedAt.split("T")[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentBlogCard;
