import { ShoppingCart } from "lucide-react";
import { CartContext } from "../store/cart-context";
import { use } from "react";

function ProductCard({
  id,
  productImage,
  category,
  title,
  salePrice,
  actualPrice,
}) {
  const { addToCart } = use(CartContext);

  return (
    <>
      <div>
        <img src={productImage} alt={title} className="rounded w-full" />

        <section className="p-3 flex flex-col gap-1">
          <p className="text-sm text-slate-500 -mb-0.5">{category}</p>
          <h3 className=" text-black font-bold sm:font-medium tracking-wide">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-indigo-600">
              Rs {salePrice.toLocaleString()}
            </p>
            <p className="text-sm text-slate-400 line-through">
              Rs {actualPrice.toLocaleString()}
            </p>
          </div>

          <button
            className="mt-2 p-2 cursor-pointer flex align-middle justify-center gap-2 bg-black text-white hover:border-indigo-700 hover:bg-indigo-700 rounded-md "
            onClick={() => addToCart(id)}
          >
            <ShoppingCart strokeWidth={1.2} size={20} /> Add to cart
          </button>
        </section>
      </div>
    </>
  );
}

export default ProductCard;
