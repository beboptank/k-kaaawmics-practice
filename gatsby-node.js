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

exports.createPages = ({
    boundActionCreators,
    graphql
}) => {
    const {
        createPage
    } = boundActionCreators;
    const postTemplate = path.resolve("src/templates/blogTemplate.js");

    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
    }
  }
  `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({
            node
        }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate,
            })
        })
    })
};


