import React from 'react';

const HomePage = ({ data }) => {
  const posts = data.allHubspotPost.edges.map(({ node }) => (
    <article key={node.id}>
      <h2>{node.title}</h2>
      <p>{node.summary}</p>
    </article>
  ));

  return <main>{posts}</main>;
};

export default HomePage;
