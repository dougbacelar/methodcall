import React from 'react';
import { graphql } from 'gatsby';

import HomePage from '../components/HomePage/HomePage';

const App = ({ data }) => <HomePage posts={data.allHubspotPost.edges} />;

export const pageQuery = graphql`
  {
    allHubspotPost(limit: 10) {
      edges {
        node {
          id
          title
          body
          slug
          summary
          meta {
            title
            description
          }
        }
      }
    }
  }
`;

export default App;
