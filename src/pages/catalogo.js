import React, { Component } from "react"
import { Default } from "../layouts/Default"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits } from "react-instantsearch-dom"

import CatalogoItem from "../components/CatalogoItem"
import { MagnifyingGlass } from "../icons"
import CustomSearchBox from "../components/SearchBox"

export default class catalogo extends Component {
  render() {
    const searchClient = algoliasearch(
      process.env.GATSBY_ALGOLIA_APP_ID,
      process.env.GATSBY_ALGOLIA_SEARCH_KEY
    )
    return (
      <Default>
        <InstantSearch indexName="products" searchClient={searchClient}>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr 2fr",
              gridTemplateRows: "5rem 1fr max-content",
              alignItems: "center",
            }}
          >
            <header className="col-start-1 col-end-3 row-start-1">
              <CustomSearchBox />
            </header>
            <main className="col-span-2 row-start-2">
              <Hits hitComponent={CatalogoItem} />
            </main>
            <aside className="col-span-2 row-start-3"></aside>
          </div>
        </InstantSearch>
      </Default>
    )
  }
}
