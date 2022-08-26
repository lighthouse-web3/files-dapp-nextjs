import React from "react";
import { mediaUrl } from "../../utils/Data/config";
import ImageBox from "../ImageBox/ImageBox";
import Styles from "./BlogCard.module.scss";

function BlogCard({ blog }) {
  return (
    <div
      className={Styles.BlogCard + " ptr"}
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
      <div className={Styles.img}>
        <ImageBox
          src={mediaUrl + blog?.attributes?.coverImage?.data?.attributes?.url}
          alt={"blogImage"}
          layout="fill"
          Styles={{ borderRadius: "15px 15px 0px 0px" }}
        />
      </div>

      <div className={Styles.contentContainer}>
        <p className={Styles.title}>{blog?.attributes?.title}</p>
        <p className={Styles.description}>{blog?.attributes?.description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
