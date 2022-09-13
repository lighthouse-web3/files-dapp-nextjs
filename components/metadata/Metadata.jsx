import Head from "next/head";
import React from "react";

function Metadata({ title, description, url, image }) {
  console.log("title", title);
  console.log("title", description);
  console.log("title", url);
  console.log("title", image);
  title = title ? title : "Lighthouse.Storage";
  description = description
    ? description
    : "Permanent Storage Redefined | store files on decentralized network for lifetime at a fixed price";
  url = url ? url : "https://www.lighthouse.storage/";
  image = image ? image : "https://www.lighthouse.storage/logo.png";
  console.log("title", title);
  console.log("title", description);
  console.log("title", url);
  console.log("title", image);
  return (
    <Head>
      {/* Primary Meta Tags  */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      {/* <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} /> */}

      {/* <!-- Twitter --> */}
      {/* <meta data-rh="true"  name="twitter:card" content="summary_large_image" />
      <meta data-rh="true"  name="twitter:url" content={url} />
      <meta data-rh="true"  name="twitter:title" content={title} />
      <meta data-rh="true"  name="twitter:description" content={description} />
      <meta data-rh="true"  name="twitter:image" content={image} /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@LighthouseWeb3" />
      <meta name="twitter:creator" content="@LighthouseWeb3" />
      <meta
        property="og:url"
        content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/"
      />
      <meta property="og:title" content="A Twitter for My Sister" />
      <meta
        property="og:description"
        content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling."
      />
      <meta
        property="og:image"
        content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"
      />
    </Head>
  );
}

export default Metadata;
