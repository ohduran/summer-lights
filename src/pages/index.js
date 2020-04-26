import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../global.css"
import NavBar from "../components/NavBar"

const IndexPage = ({ data }) => {
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
      <section>
        <Img
          fluid={
            data.allShopifyProduct.edges[0].node.images[0].localFile
              .childImageSharp.fluid
          }
        />
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
