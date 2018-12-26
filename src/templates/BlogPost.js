import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactDisqusComments from 'react-disqus-comments';
import Layout from '../components/Layout';
import EditPageLink from '../components/EditPageLink';
import converDateString from '../utils/date';
import PageMetadata from '../components/PageMetadata';
import './BlogPost.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  const dateString = post.frontmatter.date;
  const slug = post.fields.slug;
  const shareUrl = data.site.siteMetadata.siteUrl + slug;
  const pageTitle = post.frontmatter.title;
  const fluidImage = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <PageMetadata
        description={post.frontmatter.spoiler}
        image={fluidImage.src}
        pageTitle={pageTitle}
        slug={slug}
      />
      <article className='blog-post'>
        <header>
          <h1>{pageTitle}</h1>
          <time dateTime={dateString}>
            <small>{converDateString(dateString)}</small>
          </time>
          <EditPageLink
            className='edit-page-header-link'
            slug={slug}
            useGithubIcon={true}
          />
          <Img className='featured-image' fluid={fluidImage} />
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer>
          <EditPageLink className='edit-page-footer-link' slug={slug} />
        </footer>
      </article>
      <ReactDisqusComments
        identifier={data.id}
        shortname={data.site.siteMetadata.disqusShortname}
        title={pageTitle}
        url={shareUrl}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        disqusShortname
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        spoiler
        title
      }
    }
  }
`;
