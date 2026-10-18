import products from "../data";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] h-full max-w-content w-full mx-auto px-5 gap-4 mb-10">
        {Object.values(products).map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default ProductGrid;
