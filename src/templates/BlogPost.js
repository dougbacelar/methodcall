import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default ({ data }) => {
  const post = data.allHubspotPost.edges[0].node;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.body }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allHubspotPost(limit: 1, filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          body
        }
      }
    }
  }
`;
