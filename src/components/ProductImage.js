import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "../global.css"

export default class ProductImage extends Component {
  render() {
    if (this.props.fluid) {
      return (
        <Link to={`catalogo/${this.props.handle}`}>
          <Img
            className={this.props.className}
            fluid={this.props.fluid}
            alt={this.props.caption}
          />
        </Link>
      )
    }
    return (
      <Link to={`catalogo/${this.props.handle}`}>
        <img
          className={this.props.className}
          src={this.props.src}
          alt={this.props.caption}
        />
      </Link>
    )
  }
}
