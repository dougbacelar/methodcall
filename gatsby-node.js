const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
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
    `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      result.data.allHubspotPost.edges.forEach(({ node }) => {
        createPage({
          component: path.resolve('./src/templates/BlogPost.js'),
          context: {
            slug: node.slug,
          },
          path: node.slug,
        });
      });
      resolve(result);
    });
  });
};
