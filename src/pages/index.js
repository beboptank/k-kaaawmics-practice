import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

require("typeface-rubik-mono-one");
require("typeface-carrois-gothic-sc");
require("typeface-montserrat");

const Home = ({data}) => (
  <Layout>
    <h1>K-kaaawmics</h1>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.id}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Home;

export const pageQuery = graphql `
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`