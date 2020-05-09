import React, { useState } from "react"
import NavBar from "../components/NavBar"

import "../global.css"

const Default = ({ className, style, children }) => {
  return (
    <div className="min-h-screen pb-20">
      <main className={className} style={style}>
        {children}
      </main>
      <NavBar />
    </div>
  )
}

export { Default }
