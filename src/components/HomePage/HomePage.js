import React from 'react';

import BlogPostSummary from './BlogPostSummary';
import Layout from '../Layout';

const HomePage = ({ posts }) => {
  const postsSummaries = posts.map(({ node }) => (
    <BlogPostSummary
      slug={node.slug}
      summary={node.summary}
      title={node.title}
    />
  ));

  return <Layout>{postsSummaries}</Layout>;
};

export default HomePage;
