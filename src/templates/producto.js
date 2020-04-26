import React, { Component } from "react"

const ProductPage = ({ data: { shopifyProduct: product } }) => {
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default ProductPage

export const ProductPageQuery = graphql`
  query productPage($productoId: String!) {
    shopifyProduct(id: { eq: $productoId }) {
      id
      title
      descriptionHtml
      options {
        name
        values
      }
      variants {
        shopifyId
        selectedOptions {
          name
          value
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 446) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
