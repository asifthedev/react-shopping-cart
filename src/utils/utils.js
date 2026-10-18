import products from "../data";

function getTotalCartValue(items) {
  const totalCartValue = items.reduce(
    (acc, { productId, quantity }) =>
      (acc += products[productId].salePrice * quantity),
    0,
  );

  return totalCartValue;
}

function getTotalCartItems(items) {
  const totalCartItems = items.reduce((acc, { quantity }) => {
    acc = acc + quantity;
    return acc;
  }, 0);

  return totalCartItems;
}

export { getTotalCartItems, getTotalCartValue };
