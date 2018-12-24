import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import EditPageLink from '../components/EditPageLink';
import converDateString from '../utils/date';
import Img from 'gatsby-image';

export default ({ data }) => {
  const post = data.markdownRemark;
  const dateString = post.frontmatter.date;

  return (
    <Layout>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <time dateTime={dateString}>
          <small>{converDateString(dateString)}</small>
        </time>
        <EditPageLink slug={post.fields.slug} useGithubIcon={true} />
        <Img
          sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
          style={{ maxHeight: '30rem' }}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <EditPageLink
          slug={post.fields.slug}
          style={{
            display: 'inline-flex',
            float: 'right',
          }}
        />
      </article>
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
            sizes(maxWidth: 900) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        title
      }
    }
  }
`;
