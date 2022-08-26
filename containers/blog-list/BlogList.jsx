import React from "react";
import { useState } from "react";
import { BlogCard, Pagination } from "../../components";
import Styles from "./BlogList.module.scss";

function BlogList({ allBlogs }) {
  const [currentBlogs, setCurrentBlog] = useState(allBlogs);

  return (
    <>
      <div className={Styles.BlogList}>
        {currentBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <Pagination
        setCurrentData={setCurrentBlog}
        itemsPerPage={6}
        data={allBlogs}
      />
    </>
  );
}

export default BlogList;
