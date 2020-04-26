import React, { Component } from "react"
import Img from "gatsby-image"
import "../global.css"

export default class ProductImage extends Component {
  render() {
    return <Img className={this.props.className} fluid={this.props.fluid} />
  }
}
