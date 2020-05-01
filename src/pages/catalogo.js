import React, { Component } from "react"
import { Default } from "../layouts/Default"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom"
import CatalogoItem from "../components/CatalogoItem"

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
              <section className="w-8/12 mx-auto">
                <SearchBox
                  translations={{
                    placeholder: " Buscar",
                  }}
                />
              </section>
            </header>
            <main className="col-span-2 row-start-2">
              <Hits hitComponent={CatalogoItem} />
            </main>
            <aside className="col-span-2 row-start-3">
              <h1 className="my-20">Aside</h1>
            </aside>
          </div>
        </InstantSearch>
      </Default>
    )
  }
}
