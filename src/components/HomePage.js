import React from 'react';

const HomePage = ({ data }) => {
  const posts = data.allHubspotPost.edges.map(({ node }) => (
    <div key={node.id}>{node.title}</div>
  ));

  return posts;
};

export default HomePage;
