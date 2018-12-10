import React from 'react';
import { Link } from 'gatsby';

const BlogPostSummary = ({ date, slug, spoiler, title }) => (
  <article key={slug}>
    <h2>
      <Link to={slug}>{title}</Link>
    </h2>
    <small>{date}</small>
    <p dangerouslySetInnerHTML={{ __html: spoiler }} />
  </article>
);

export default BlogPostSummary;
