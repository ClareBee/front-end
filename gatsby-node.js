const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement Gatsby API “createPages”. Lets plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getPosts = makeRequest(
    graphql,
    `
    {
      allStrapiPost {
        edges {
          node {
            id
          }
        }
      }
    }
    `
  ).then(result => {
    const { edges } = result.data.allStrapiPost
    // Create pages for each article.
    edges.forEach(({ node }) => {
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/post.js`),
        context: {
          id: node.id,
        },
      })
    })
    const postsPerPage = 2
    const numPages = Math.ceil(edges.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/posts/` : `/posts/${i + 1}`,
        component: path.resolve("src/templates/posts.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  const getAuthors = makeRequest(
    graphql,
    `
      {
        allStrapiUser {
          edges {
            node {
              id
            }
          }
        }
      }
      `
  ).then(result => {
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
  })
  // Queries for posts & authors nodes for creating pages
  return Promise.all([getPosts, getAuthors])
}
