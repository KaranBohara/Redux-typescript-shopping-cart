const productReducer = (
  state = [],
  Action: { type: string; payload: any[] }
) => {
  if (Action.type === "addProduct") {
    return [...Action.payload];
  } else return state;
};
export default productReducer;
