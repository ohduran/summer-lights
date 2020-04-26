import React, { Component } from "react"
import NavBar from "../components/NavBar"

import "../global.css"

export class Default extends Component {
  render() {
    return (
      <div className="min-h-screen">
        <main className={this.props.className} style={this.props.style}>
          {this.props.children}
        </main>
        <NavBar />
      </div>
    )
  }
}
