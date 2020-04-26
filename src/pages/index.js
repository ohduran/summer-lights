import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"

import "../global.css"

import NavBar from "../components/NavBar"
import ProductImage from "../components/ProductImage"

const IndexPage = ({ data }) => {
  const swiperParams = {
    slidesPerView: 2,
    spaceBetween: 2,
    swipeToSlide: true,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: true,
    },
  }

  return (
    <main className="min-h-screen">
      <section>
        <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        <h1 className="text-5xl text-center text-yellow-900 font-family-pacifico">
          Summer Lights
        </h1>
        <h2 className="text-xl text-center text-yellow-800 font-family-alternates font-bold">
          #Reinvéntate
        </h2>
      </section>
      <section id="carousel" className="mt-1">
        <Swiper {...swiperParams}>
          {data.allShopifyProduct.edges.map(edge => {
            return (
              <ProductImage
                className="h-64 object-cover object-center"
                fluid={edge.node.images[0].localFile.childImageSharp.fluid}
              />
            )
          })}
        </Swiper>
      </section>
      <NavBar />
    </main>
  )
}
export default IndexPage

export const IndexPageQuery = graphql`
  query allImages {
    allFile(
      filter: { relativePath: { eq: "carlos-vaz-KP4bxnxAilU-unsplash.jpg" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allShopifyProduct {
      edges {
        node {
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 290) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
