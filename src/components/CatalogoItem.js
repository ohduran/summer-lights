import React, { Component } from "react"
import ProductImage from "./ProductImage"

const CatalogoItem = ({ hit }) => {
  return (
    <>
      <figure>
        <ProductImage
          className="h-48 w-11/12 object-cover mx-auto"
          src={hit.product_image}
          caption={hit.title}
        />
        <figcaption className="text-xs text-center mx-1">
          {hit.title}
        </figcaption>
      </figure>
    </>
  )
}

export default CatalogoItem
