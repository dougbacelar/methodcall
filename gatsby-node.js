const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const getSlug = (post) => post.node.fields.slug;
const getTitle = (post) => post.node.frontmatter.title;

const extractPostData = (post) =>
  post && {
    slug: getSlug(post),
    title: getTitle(post),
  };

const getPreviousPost = (posts, index) => {
  const previousPost = index === posts.length - 1 ? null : posts[index + 1];

  return extractPostData(previousPost);
};

const getNextPost = (posts, index) => {
  const nextPost = index === 0 ? null : posts[index - 1];

  return extractPostData(nextPost);
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
    ).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach((post, index) => {
        const slug = getSlug(post);

        createPage({
          path: slug,
          component: path.resolve('./src/templates/BlogPost.js'),
          context: {
            next: getNextPost(posts, index),
            previous: getPreviousPost(posts, index),
            slug,
          },
        });
      });
      resolve(result);
    });
  });
};

exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ getNode, node });

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
  }
};
