import React, { useContext } from "react"
import { Link } from "gatsby"

import "../global.css"
import { ShoppingBag, OpenBook } from "../icons"
import { CartContext } from "../contexts/CartContext"

const NavBar = () => {
  const { cart } = useContext(CartContext)

  return (
    <nav className="fixed bottom-0 w-full overflow-hidden flex justify-evenly bg-gray-900 z-10 text-orange-100">
      <Link to="/catalogo" className="py-6">
        <OpenBook className="h-6 w-6" />
      </Link>
      <Link to="/" className="py-6 font-family-pacifico">
        SL
      </Link>
      <Link
        to="/"
        className="py-6 grid grid-cols-2"
        style={{
          gridTemplateRows: "min-content",
        }}
      >
        <ShoppingBag className="h-6 w-6 row-start-1 col-start-1 col-end-3" />
        {cart.checkout.lineItems.length ? (
          <span
            className="row-start-1 col-start-2 z-10 text-xs text-center font-semibold text-white bg-orange-900 rounded-full"
            style={{
              alignSelf: "start",
            }}
          >
            {cart.checkout.lineItems.length}
          </span>
        ) : (
          ""
        )}
      </Link>
    </nav>
  )
}

export default NavBar
