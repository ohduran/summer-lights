import React, { Component } from "react"
import { Default } from "../layouts/Default"

import ProductImage from "../components/ProductImage"

export default class catalogo extends Component {
  render() {
    const {
      allShopifyProduct: { nodes: products },
    } = this.props.data
    return (
      <Default
        className="grid"
        style={{
          gridTemplateColumns: "1fr 2fr",
          gridTemplateRows: "2rem 1fr",
          alignItems: "center",
        }}
      >
        <header className="col-start-1 col-end-3 row-start-1">
          <h1 className="text-center text-2xl font-family-alternates">
            Catálogo
          </h1>
        </header>
        <main className="col-start-2 row-start-2 grid grid-cols-2 grid-rows-3 gap-1">
          {products.map(product => {
            return (
              <ProductImage
                className="h-64 object-cover object-center"
                fluid={product.images[0].localFile.childImageSharp.fluid}
              />
            )
          })}
        </main>
        <aside className="col-start-1 row-start-2">Aside</aside>
      </Default>
    )
  }
}

export const CatalogoPageQuery = graphql`
  query allProducts {
    allShopifyProduct {
      nodes {
        title
        handle
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 290) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`
