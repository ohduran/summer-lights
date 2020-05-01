import React, { Component } from "react"
import Img from "gatsby-image"
import "../global.css"

export default class ProductImage extends Component {
  render() {
    if (this.props.fluid) {
      return (
        <Img
          className={this.props.className}
          fluid={this.props.fluid}
          alt={this.props.caption}
        />
      )
    }
    return (
      <img
        className={this.props.className}
        src={this.props.src}
        alt={this.props.caption}
      />
    )
  }
}
