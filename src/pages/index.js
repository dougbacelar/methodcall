import React from "react"
import { graphql } from "gatsby"

const HomePage = ({data}) => {
    console.log(data);

    console.log(process)
    const posts = data.allHubspotPost.edges.map(({node})=>
    <div key={node.id}>
        {node.title} 
    </div>);
    console.log(posts);
    return (posts)
}

export const pageQuery = graphql`
{
    allHubspotPost(limit: 10) {
      edges {
        node {
          id
          title
          body
          slug
          meta {
            title
            description
          }
        }
      }
    }
  }
`;

export default HomePage;