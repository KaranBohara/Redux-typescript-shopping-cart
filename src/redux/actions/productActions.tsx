export default function addProduct(products: any[]) {
  return {
    type: "addProduct",
    payload: products,
  };
}
