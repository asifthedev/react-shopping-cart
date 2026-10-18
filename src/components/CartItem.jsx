import { X } from "lucide-react";
import { use } from "react";
import { CartContext } from "../store/cart-context";

function CartItem({ id, productImage, title, price, quantity }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = use(CartContext);
  return (
    <div className="flex shrink-0 gap-3 items-center border-b border-b-slate-200 py-3">
      <img
        src={productImage}
        alt=""
        className="h-20 w-20 object-cover object-center"
      />

      <div className="flex flex-col gap-2 grow ">
        <div className="flex justify-between w-full items-center">
          <p className="font-medium text-base">{title}</p>
          <button
            className=" cursor-pointer p-2 rounded-full text-slate-500 hover:bg-indigo-600 hover:text-white"
            onClick={() => removeItem(id)}
          >
            <X size={15} strokeWidth={1.5} />
          </button>
        </div>

        <div className="border-2 border-slate-200 w-fit -mt-1.5">
          <button
            className="py-0.5 px-2 text-slate-700 hover:bg-indigo-600 hover:text-white border-r-2 border-r-stone-200"
            onClick={() => decreaseQuantity(id)}
          >
            -
          </button>
          <span className="px-3 text-slate-900">{quantity}</span>
          <button
            className="py-0.5 px-2 text-slate-700 hover:bg-indigo-600 hover:text-white border-l-2 border-l-stone-200"
            onClick={() => increaseQuantity(id)}
          >
            +
          </button>
        </div>

        <p className="item-price text-sm">
          <span className="text-slate-500">1 ×</span>{" "}
          <span className="text-indigo-700 font-medium">
            Rs {price.toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
