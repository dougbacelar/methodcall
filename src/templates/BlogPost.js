import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import EditPageLink from '../components/EditPageLink';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <small style={{ display: 'flex' }}>
        {post.frontmatter.date}
        <EditPageLink slug={post.fields.slug} useGithubIcon={true} />
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <EditPageLink slug={post.fields.slug} style={{ float: 'right' }} />
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
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
`;
