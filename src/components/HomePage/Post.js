import React from 'react';
import { Link } from 'gatsby';

const Post = ({ slug, title, summary }) => (
  <article key={slug}>
    <h2>
      <Link to={slug}>{title}</Link>
    </h2>
    <p dangerouslySetInnerHTML={{ __html: summary }} />
  </article>
);

export default Post;
