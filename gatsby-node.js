/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const { graphql } = require("gatsby");

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  );
});

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getComics = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    //Create pages for each article
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/comic.js`),
        context: {
          id: node.id,
        }
      });
    });
  });

  const getAuthors = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    result.data.allStrapiUser.edges.forEach(({ node }) => {
      createPage({
        path: `/authors/${node.id}`,
        component: path.resolve(`src/templates/author.js`),
        context: {
          id: node.id,
        }
      });
    });
  });

  return Promise.all([
    getComics,
    getAuthors,
  ]);

};



