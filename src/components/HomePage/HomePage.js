import React from 'react';

import BlogPostSummary from './BlogPostSummary';
import Layout from '../Layout';
import PageMetadata from '../PageMetadata';

const HomePage = ({ posts }) => {
  const postsSummaries = posts.map(({ node }) => (
    <BlogPostSummary
      date={node.frontmatter.date}
      featuredImage={node.frontmatter.featuredImage}
      key={node.id}
      slug={node.fields.slug}
      spoiler={node.frontmatter.spoiler}
      title={node.frontmatter.title}
    />
  ));

  return (
    <Layout>
      <PageMetadata
        image={
          posts[0].node.frontmatter.featuredImage.childImageSharp.fluid.src
        }
      />
      {postsSummaries}
    </Layout>
  );
};

export default HomePage;
