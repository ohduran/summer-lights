import React, { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = props => {
  const [cart, useCart] = useState([{ title: "text" }])

  const addToCart = () => {
    console.log("added to cart")
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
