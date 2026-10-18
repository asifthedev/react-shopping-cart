import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function reducer(prevState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = prevState.items.some(
        (cartItem) => cartItem.productId === action.payload,
      );

      if (existingItem) {
        return {
          items: prevState.items.map((cartItem) =>
            cartItem.productId === action.payload
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }

      return {
        items: [...prevState.items, { productId: action.payload, quantity: 1 }],
      };
    }

    case "INCREASE_QUANTITY":
      return {
        items: prevState.items.map((cartItem) =>
          cartItem.productId === action.payload
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        items: prevState.items
          .map((cartItem) =>
            cartItem.productId === action.payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          )
          .filter((cartItem) => cartItem.quantity > 0),
      };

    case "REMOVE_ITEM":
      return {
        items: prevState.items.filter(
          (cartItem) => cartItem.productId !== action.payload,
        ),
      };
    case "CLEAR_ITEMS":
      return { items: [] };
    default:
      return prevState;
  }
}

function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(reducer, { items: [] });

  function addItem(id) {
    cartDispatch({ type: "ADD_ITEM", payload: id });
  }

  function increaseItemQuantity(id) {
    cartDispatch({ type: "INCREASE_QUANTITY", payload: id });
  }

  function decreaseItemQuantity(id) {
    cartDispatch({ type: "DECREASE_QUANTITY", payload: id });
  }

  function removeCartItem(id) {
    cartDispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function clearCart() {
    cartDispatch({ type: "CLEAR_ITEMS" });
  }

  const contextDefaultValue = {
    items: cartState.items,
    addToCart: addItem,
    increaseQuantity: increaseItemQuantity,
    decreaseQuantity: decreaseItemQuantity,
    removeItem: removeCartItem,
    clearCart: clearCart,
  };

  return <CartContext value={contextDefaultValue}>{children}</CartContext>;
}

export { CartContext, CartContextProvider };
