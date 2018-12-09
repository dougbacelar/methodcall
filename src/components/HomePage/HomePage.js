import React from 'react';

import Post from './Post';
import './styles.css';

const HomePage = ({ data }) => {
  const posts = data.allHubspotPost.edges.map(({ node }) => (
    <Post slug={node.slug} summary={node.summary} title={node.title} />
  ));

  return (
    <div className='wrapper'>
      <main className='home-page'>{posts}</main>
    </div>
  );
};

export default HomePage;
