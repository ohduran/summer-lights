import React, { useState } from "react"
import NavBar from "../components/NavBar"

import "../global.css"
import CartContextProvider from "../contexts/CartContext"

const Default = ({ className, style, children }) => {
  return (
    <CartContextProvider>
      <div className="min-h-screen pb-20">
        <main className={className} style={style}>
          {children}
        </main>
        <NavBar />
      </div>
    </CartContextProvider>
  )
}

export { Default }
