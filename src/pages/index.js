import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"

import "../global.css"

import ProductImage from "../components/ProductImage"
import { Default } from "../layouts/Default"

const IndexPage = ({ data }) => {
  const swiperParams = {
    slidesPerView: 2,
    spaceBetween: 5,
    swipeToSlide: true,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: true,
    },
  }

  return (
    <Default>
      <section>
        <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        <h1 className="text-5xl text-center text-yellow-900 font-family-pacifico">
          Summer Lights
        </h1>
        <h2 className="text-xl text-center text-yellow-800 font-family-alternates font-bold">
          #Reinvéntate
        </h2>
      </section>
      {/*
      {Math.floor(Math.random() * data.allShopifyProduct.edges.length)}
      */}
      <section id="carousel" className="my-1 pb-16">
        <Swiper {...swiperParams}>
          {data.allShopifyProduct.edges.slice(0, 5).map(edge => {
            return (
              <div className="h-72">
                <ProductImage
                  className="h-72 w-full object-cover object-center"
                  fluid={edge.node.images[0].localFile.childImageSharp.fluid}
                />
              </div>
            )
          })}
        </Swiper>
      </section>
    </Default>
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
