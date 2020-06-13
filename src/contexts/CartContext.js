import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"
const SHOPIFY_CHECKOUT_STORAGE_KEY = "shopify_checkout_id"

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOP_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

function createNewCheckout(store) {
  return store.checkout.create()
}

function fetchCheckout(store, id) {
  return store.client.checkout.fetch(id)
}

function setCheckoutInState(checkout, setCart) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, checkout.id)
  }

  setCart(prevState => {
    return { ...prevState, checkout }
  })
}

const initialCartState = {
  client,
  isAdding: false,
  checkout: { lineItems: [] },
}

export const CartContext = createContext({
  cart: initialCartState,
  setCart: () => null,
})

const CartContextProvider = props => {
  const [cart, setCart] = useState(initialCartState)

  useEffect(() => {
    const initializeCheckout = async () => {
      //Comprueba si ya hay un cart
      const existingCheckoutId =
        typeof window !== "undefined"
          ? localStorage.getItem(SHOPIFY_CHECKOUT_STORAGE_KEY)
          : null

      console.log(`existingCheckoutId is${existingCheckoutId}`)
      if (existingCheckoutId) {
        try {
          const checkout = await fetchCheckout(client, existingCheckoutId)
          // Make sure this cart hasn’t already been purchased.
          console.log(`checkout.completedAt is${checkout.completedAt}`)
          if (!checkout.completedAt) {
            setCheckoutInState(checkout, setCart)
            return
          }
        } catch (e) {
          localStorage.setItem(SHOPIFY_CHECKOUT_STORAGE_KEY, null)
        }
      }
      const newCheckout = await createNewCheckout(client)
      setCheckoutInState(newCheckout, setCart)
    }
    initializeCheckout()
  }, [])

  const addToCart = (variant, quantity) => {
    const { checkout, client } = cart

    const addItemToCart = async (variantId, quantity) => {
      if (variantId === "" || !quantity) {
        console.error("Both a size and quantity are required.")
        return
      }

      setCart(prevState => {
        return { ...prevState, isAdding: true }
      })

      const checkoutId = checkout.id
      const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]

      const newCheckout = await client.checkout.addLineItems(
        checkoutId,
        lineItemsToAdd
      )

      console.log(newCheckout)
      console.log(newCheckout.lineItems.length)

      setCart(prevState => {
        return { ...prevState, checkout: newCheckout, isAdding: false }
      })
    }

    console.log(
      `added to cart item ${variant.shopifyId} with quantity ${quantity}`
    )

    return addItemToCart(variant.shopifyId, quantity)
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
