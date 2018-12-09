import React from 'react';
import { Link } from 'gatsby';

const BlogPostSummary = ({ slug, title, summary }) => (
  <article key={slug}>
    <h2>
      <Link to={slug}>{title}</Link>
    </h2>
    <div dangerouslySetInnerHTML={{ __html: summary }} />
  </article>
);

export default BlogPostSummary;
