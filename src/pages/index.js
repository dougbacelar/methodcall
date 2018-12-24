import React from 'react';
import { graphql } from 'gatsby';

import HomePage from '../components/HomePage/HomePage';

const App = ({ data }) => <HomePage posts={data.allMarkdownRemark.edges} />;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
          id
        }
      }
    }
  }
`;

export default App;
