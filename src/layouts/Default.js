import React, { Component } from "react"
import NavBar from "../components/NavBar"
import { ProductProvider } from "../context"

import "../global.css"

export class Default extends Component {
  render() {
    return (
      <ProductProvider>
        <div className="min-h-screen pb-20">
          <main className={this.props.className} style={this.props.style}>
            {this.props.children}
          </main>
          <NavBar />
        </div>
      </ProductProvider>
    )
  }
}
