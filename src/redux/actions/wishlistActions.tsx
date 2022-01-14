export function addItemWishlist(id: any) {
  return {
    type: "additemwishlist",
    id: id,
  };
}
export function removeItemWishlist(id: any) {
  return {
    type: "removeitemwishlist",
    id: id,
  };
}
