import React, { Component } from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { MagnifyingGlass, CircledCross } from "../icons"

import PoweredBy from "./PoweredBy"

const SearchBox = ({ currentRefinement, refine }) => (
  <div className="w-11/12 mx-auto">
    <form
      noValidate
      action=""
      role="search"
      className="flex justify-center bg-white py-2 px-2 rounded-full shadow-lg"
    >
      <MagnifyingGlass className="h-4 w-4 text-gray-900 my-auto" />
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        className="mx-2 h-8 w-8/12 bg-gray-100 "
      />
      {currentRefinement ? (
        <button className="mx-2 my-auto" onClick={() => refine("")}>
          <span className="font-semibold">X</span>
        </button>
      ) : (
        ""
      )}
      <PoweredBy />
    </form>
  </div>
)

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox
