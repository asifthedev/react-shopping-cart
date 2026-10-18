import { X } from "lucide-react";
import CartItem from "./CartItem";
import { CartContext } from "../store/cart-context";
import { use, useState } from "react";
import products from "../data";
import { getTotalCartValue } from "../utils/utils";

export default function CartDrawer({ onCloseHandler }) {
  const { items, clearCart } = use(CartContext);

  const totalCartValue = getTotalCartValue(items);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-2"
        onClick={() => onCloseHandler(false)}
      ></div>
      <div className="z-50 fixed h-dvh bg-stone-50 w-85 right-0 flex flex-col font-display text-slate-900">
        {/* Header */}
        <div className="h-17 flex justify-between px-3 items-center border-b border-b-stone-200">
          <h2 className="font-medium text-xl">Shopping cart</h2>
          <button
            className="cursor-pointer flex gap-1 text-[17px] font-medium items-center justify-between text-slate-600 hover:text-indigo-600"
            onClick={() => onCloseHandler(false)}
          >
            <X size={20} strokeWidth={1.3} />
            Close
          </button>
        </div>

        {/* Items list */}
        <div className="flex flex-col min-h-0 flex-1 p-3 overflow-auto gap-3">
          {items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              id={cartItem.productId}
              productImage={products[cartItem.productId].productImage}
              title={products[cartItem.productId].title}
              price={products[cartItem.productId].salePrice}
              quantity={cartItem.quantity}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mb-4 flex flex-col gap-3">
          <div className="px-3 mb-6 h-17 flex justify-between items-center border-y border-y-stone-200">
            <span className="font-bold text-xl">Subtotal:</span>
            <span className="text-lg font-bold text-indigo-700">
              Rs {totalCartValue.toLocaleString()}
            </span>
          </div>

          <section className="flex flex-col shrink-0 gap-3 px-3 font-medium">
            <button
              className="w-full p-2.5 bg-stone-200 text-slate-800 cursor-pointer"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button className="w-full p-2.5 bg-indigo-700 text-white">
              Checkout
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
