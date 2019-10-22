const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement Gatsby API “createPages”. Lets plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getPosts= makeRequest(graphql, `
    {
      allStrapiPost {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/post.js`),
        context: {
          id: node.id,
        },
      })
    })
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
      // Create pages for each user.
      result.data.allStrapiUser.edges.forEach(({ node }) => {
        createPage({
          path: `/authors/${node.id}`,
          component: path.resolve(`src/templates/author.js`),
          context: {
            id: node.id,
          },
        })
      })
    });
  // Queries for posts & authors nodes for creating pages
  return Promise.all([
    getPosts,
    getAuthors,
  ])
};
