import React, { useState, useContext } from "react"
import Img from "gatsby-image"

import { Default } from "../layouts/Default"
import { CartContext } from "../contexts/CartContext"
import AddToCartButton from "./components/AddToCartButton"

const ProductPage = ({ data: { shopifyProduct: product } }) => {
  const variants = product.variants
  const [variant, setVariant] = useState(variants[0])

  return (
    <Default>
      <main className="mt-2">
        <figure>
          <Img
            className="mx-2 h-64 object-cover max-h-full"
            fluid={variant.image.localFile.childImageSharp.fluid}
            alt={product.title}
          />
        </figure>
        <section className="mx-5 mt-5 tracking-widest">
          <h2 className="text-2xl text-orange-900 text-center font-bold font-family-alternates uppercase">
            {product.title}
          </h2>
          <h6 className="mt-5 text-xs line-through text-red-500">
            {variant.compareAtPriceV2.amount > variant.priceV2.amount
              ? variant.compareAtPriceV2.amount +
                " " +
                variant.compareAtPriceV2.currencyCode
              : ""}
          </h6>
          <h3 className="text-3xl">
            {variant.priceV2.amount} {variant.priceV2.currencyCode}
          </h3>
          <AddToCartButton variant={variant} />
        </section>

        <section className="mx-8 mt-8">
          <p
            className="text-lg tracking-wide text-justify"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
        </section>
      </main>
    </Default>
  )
}

export default ProductPage

export const ProductPageQuery = graphql`
  query productPage($productoId: String!) {
    shopifyProduct(id: { eq: $productoId }) {
      id
      title
      descriptionHtml
      handle
      shopifyId
      availableForSale
      options {
        name
        values
      }
      variants {
        availableForSale
        shopifyId
        priceV2 {
          amount
          currencyCode
        }
        compareAtPriceV2 {
          amount
          currencyCode
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
