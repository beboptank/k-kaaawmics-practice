import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Comic = ({data}) => (
  <Layout>
    <h1>K-kaaawmics</h1>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.id}</Link>
          </h2>
          <Img fixed={document.node.image.childImageSharp.fixed}/>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Comic;

export const pageQuery = graphql `
  query ComicQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height:125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`