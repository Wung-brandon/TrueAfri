// src/components/Seo.tsx (continued)
import React from 'react';
import Head from 'next/head';

const Seo = ({ 
  title, 
  description,
  canonicalUrl
}) => {
  const siteTitle = 'Uncovering the True Africa';
  const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;