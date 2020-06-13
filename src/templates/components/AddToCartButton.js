import React, { useContext } from "react"

import { CartContext } from "../../contexts/CartContext"

const AddToCartButton = ({ variant }) => {
  const { cart, addToCart } = useContext(CartContext)

  return (
    <button
      onClick={() => {
        addToCart(variant, 1)
      }}
      className="bg-orange-300 hover:bg-orange-900 text-orange-900 hover:text-orange-300 focus:outline-none focus:bg-orange-900 px-6 py-3 rounded-lg shadow-lg text-lg"
    >
      {variant.availableForSale
        ? "Añadir a la Bolsa"
        : "Producto no disponible"}
    </button>
  )
}

export default AddToCartButton
