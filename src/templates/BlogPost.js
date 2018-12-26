import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import EditPageLink from '../components/EditPageLink';
import converDateString from '../utils/date';
import Img from 'gatsby-image';
import PageMetadata from '../components/PageMetadata';
import './BlogPost.css';

export default ({ data }) => {
  const post = data.markdownRemark;
  const dateString = post.frontmatter.date;
  const slug = post.fields.slug;
  const fluidImage = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <PageMetadata
        description={post.frontmatter.spoiler}
        image={fluidImage.src}
        pageTitle={post.frontmatter.title}
        slug={slug}
      />
      <article className='blog-post'>
        <h1>{post.frontmatter.title}</h1>
        <time dateTime={dateString}>
          <small>{converDateString(dateString)}</small>
        </time>
        <EditPageLink slug={slug} useGithubIcon={true} />
        <Img
          fluid={fluidImage}
          style={{ maxHeight: '30rem', marginBottom: '3rem' }}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <EditPageLink
        slug={slug}
        style={{
          display: 'inline-flex',
          float: 'right',
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
