export function addItemCart(id: any) {
  return {
    type: "additemcart",
    id: id,
  };
}

export function removeItemCart(id: any) {
  return {
    type: "removeitemcart",
    id: id,
  };
}

export function removeallCart() {
  return {
    type: "removeallcart",
  };
}
