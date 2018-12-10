import React from 'react';

import BlogPostSummary from './BlogPostSummary';
import Layout from '../Layout';

const HomePage = ({ posts }) => {
  const postsSummaries = posts.map(({ node }) => (
    <BlogPostSummary
      date={node.frontmatter.date}
      key={node.id}
      slug={node.fields.slug}
      spoiler={node.frontmatter.spoiler}
      title={node.frontmatter.title}
    />
  ));

  return <Layout>{postsSummaries}</Layout>;
};

export default HomePage;
