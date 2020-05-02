import React, { Component } from "react"
import Img from "gatsby-image"

import { Default } from "../layouts/Default"
import { FilledHeart } from "../icons"

const ProductPage = ({ data: { shopifyProduct: product } }) => {
  return (
    <Default>
      <main className="mt-10">
        <figure>
          <Img
            className="mx-2 h-64 object-cover max-h-full"
            fluid={product.variants[0].image.localFile.childImageSharp.fluid}
            alt={product.title}
          />
        </figure>
        <section className="mx-5 mt-5 tracking-widest">
          <h2 className="text-2xl text-orange-900 font-bold font-family-alternates uppercase">
            {product.title}
          </h2>
          <h3 className="mt-2 text-3xl">
            {product.variants[0].selectedOptions[0].value} €
          </h3>
        </section>
        <section className="mx-5 mt-5 flex justify-evenly">
          <button className="bg-orange-300 hover:bg-orange-900 text-orange-900 hover:text-orange-300 focus:outline-none focus:bg-orange-900 px-6 py-3 rounded-lg shadow-lg text-lg">
            Añadir a la Bolsa
          </button>
        </section>
        <section className="mx-8 mt-5">
          <p className="text-lg tracking-wide text-justify">
            {product.descriptionHtml}
          </p>
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
