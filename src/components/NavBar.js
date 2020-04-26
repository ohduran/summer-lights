import React, { Component } from "react"

import "../global.css"
import { ShoppingBag, User, OpenBook, Heart } from "../icons"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="fixed bottom-0 w-full overflow-hidden flex justify-around bg-gray-900 z-10 text-orange-100 just">
        <a className="pl-5 py-5 font-family-pacifico">SL</a>
        <a className="py-5">
          <OpenBook className="h-6 w-6" />
        </a>
        <a className="py-5">
          <Heart className="h-6 w-6" />
        </a>
        <a className="py-5">
          <ShoppingBag className="h-6 w-6" />
        </a>
        <a className="pr-5 py-5">
          <User className="h-6 w-6" />
        </a>
      </nav>
    )
  }
}
