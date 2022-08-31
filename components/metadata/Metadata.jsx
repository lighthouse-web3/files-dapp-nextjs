import Head from "next/head";
import React from "react";

function Metadata({ title, description, url, image }) {
  title = title ? title : "Lighthouse.Storage";
  description = description
    ? description
    : "Permanent Storage Redefined | store files on decentralized network for lifetime at a fixed price";
  url = url ? url : "https://www.lighthouse.storage/";
  image = image ? image : "https://www.lighthouse.storage/logo.png";
  return (
    <Head>
      {/* Primary Meta Tags  */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

export default Metadata;
