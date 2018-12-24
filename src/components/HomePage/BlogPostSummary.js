import Img from 'gatsby-image';
import React from 'react';
import { Link } from 'gatsby';
import converDateString from '../../utils/date';

const BlogPostSummary = ({ date, featuredImage, slug, spoiler, title }) => (
  <article key={slug}>
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
    <Link to={slug}>
      <Img
        sizes={featuredImage.childImageSharp.sizes}
        style={{ maxHeight: '12rem' }}
      />
    </Link>
    <time dateTime={date}>
      <small>{converDateString(date)}</small>
    </time>
    <p dangerouslySetInnerHTML={{ __html: spoiler }} />
  </article>
);

export default BlogPostSummary;
