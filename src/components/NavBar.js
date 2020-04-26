import React, { Component } from "react"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="sticky bottom-0 w-full">
        <ul className="flex justify-around">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Catálogo</a>
          </li>
          <li>
            <a>Carrito</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </nav>
    )
  }
}
