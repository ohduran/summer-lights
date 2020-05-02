import React, { Component } from "react"
import { Link } from "gatsby"

import "../global.css"
import { ShoppingBag, User, OpenBook, FilledHeart } from "../icons"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="fixed bottom-0 w-full overflow-hidden flex justify-evenly bg-gray-900 z-10 text-orange-100">
        <Link to="/catalogo" className="py-6">
          <OpenBook className="h-6 w-6" />
        </Link>
        <Link to="/" className="py-6 font-family-pacifico">
          SL
        </Link>
        <a className="py-6">
          <ShoppingBag className="h-6 w-6" />
        </a>
      </nav>
    )
  }
}
