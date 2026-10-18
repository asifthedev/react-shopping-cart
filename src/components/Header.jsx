import { Handbag } from "lucide-react";
import { use, useState } from "react";
import { CartContext } from "../store/cart-context";
import CartDrawer from "./CartDrawer";
import { getTotalCartValue, getTotalCartItems } from "../utils/utils";

function Header() {
  const { items } = use(CartContext);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCartValue = getTotalCartValue(items);

  return (
    <>
      {isCartOpen && <CartDrawer onCloseHandler={setIsCartOpen} />}
      <header className="bg-gray-50 h-18.75 w-full px-5 sm:px-10 border border-b-0.5 border-gray-200 mb-8 sticky top-0 z-1">
        <div className="flex justify-between h-full max-w-content w-full mx-auto items-center sm:px-5 ">
          <p className="text-2xl font-bold font-logo">Choice</p>

          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => setIsCartOpen(true)}
          >
            <section className="relative">
              <span className="absolute h-4 p-1 bg-indigo-600 rounded-full flex items-center justify-center min-w-4 text-white text-xs right-0 top-1">
                {getTotalCartItems(items)}
              </span>
              <Handbag size={34} strokeWidth={1} />
            </section>

            <section>
              <p className="text-sm tracking-normal">Cart</p>
              <p className="font-medium text-sm -mt-0.5">
                Rs {totalCartValue.toLocaleString()}
              </p>
            </section>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
