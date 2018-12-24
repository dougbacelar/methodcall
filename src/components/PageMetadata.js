import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        twitter
      }
    }
  }
`;

function PageMetadata({ description, image, pageTitle, slug }) {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const { siteMetadata } = data.site;
        const siteTitle = siteMetadata.title;
        const metaDescription = description || siteMetadata.description;
        const metaImage = image ? `${siteMetadata.siteUrl}${image}` : null;
        const metaUrl = slug
          ? `${siteMetadata.siteUrl}${slug}`
          : siteMetadata.siteUrl;

        return (
          <Helmet
            defaultTitle={siteTitle}
            title={pageTitle}
            titleTemplate={`%s - ${siteTitle}`}>
            <html lang='en' />

            <meta content={siteMetadata.author} name='author' />
            <meta content={metaDescription} property='og:description' />
            <meta content='en' property='og:locale' />
            <meta content={siteTitle} property='og:site_name' />
            <meta
              content={pageTitle ? 'article' : 'website'}
              property='og:type'
            />
            <meta content={metaUrl} property='og:url' />
            {metaImage && <meta content={metaImage} property='og:image' />}
            {metaImage && <meta content={metaImage} property='twitter:image' />}
            <meta content='summary' property='twitter:card' />
            <meta content={siteMetadata.twitter} property='twitter:creator' />
            <meta content={pageTitle || siteTitle} property='twitter:title' />
          </Helmet>
        );
      }}
    />
  );
}

export default PageMetadata;
