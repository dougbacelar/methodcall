import React from 'react';

import './styles.css';

const HomePage = ({ data }) => {
  const posts = data.allHubspotPost.edges.map(({ node }) => (
    <article key={node.id}>
      <h2>{node.title}</h2>
      <p>{node.summary}</p>
    </article>
  ));

  return (
    <div className='wrapper'>
      <main className='home-page'>{posts}</main>
    </div>
  );
};

export default HomePage;
