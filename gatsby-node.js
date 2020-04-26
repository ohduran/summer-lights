const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        nodes {
          id
          handle
        }
      }
    }
  `)

  result.data.allShopifyProduct.nodes.forEach(node => {
    createPage({
      path: `/catalogo/${node.handle}`,
      component: path.resolve(`./src/templates/producto.js`),
      context: {
        productoId: node.id,
      },
    })
  })
}
