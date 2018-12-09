import React from 'react';
import { graphql } from 'gatsby';

import HomePage from '../components/HomePage';

const App = ({ data }) => <HomePage data={data} />;

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
