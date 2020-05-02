import React, { Component } from "react"
import Img from "gatsby-image"

import { Default } from "../layouts/Default"
import { ProductConsumer } from "../context"

const ProductPage = ({ data: { shopifyProduct: product } }) => {
  return (
    <Default>
      <main className="mt-2">
        <figure>
          <Img
            className="mx-2 h-64 object-cover max-h-full"
            fluid={product.variants[0].image.localFile.childImageSharp.fluid}
            alt={product.title}
          />
        </figure>
        <section className="mx-5 mt-5 tracking-widest">
          <h2 className="text-2xl text-orange-900 text-center font-bold font-family-alternates uppercase">
            {product.title}
          </h2>
          <h6 className="mt-5 text-xs line-through text-red-500">
            {product.variants[0].compareAtPriceV2.amount >
            product.variants[0].priceV2.amount
              ? product.variants[0].compareAtPriceV2.amount +
                " " +
                product.variants[0].compareAtPriceV2.currencyCode
              : ""}
          </h6>
          <h3 className="text-3xl">
            {product.variants[0].priceV2.amount}{" "}
            {product.variants[0].priceV2.currencyCode}
          </h3>
        </section>
        <ProductConsumer>
          {value => {
            return <h1>{value}</h1>
          }}
        </ProductConsumer>
        <section className="mx-5 mt-5 flex justify-evenly">
          <button className="bg-orange-300 hover:bg-orange-900 text-orange-900 hover:text-orange-300 focus:outline-none focus:bg-orange-900 px-6 py-3 rounded-lg shadow-lg text-lg">
            {product.variants[0].availableForSale
              ? "Añadir a la Bolsa"
              : "Producto no disponible"}
          </button>
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
