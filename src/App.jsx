import { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <ProductGrid />
      </CartContextProvider>
    </>
  );
}

export default App;
