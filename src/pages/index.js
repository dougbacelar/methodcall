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
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 900) {
                  ...GatsbyImageSharpSizes
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
