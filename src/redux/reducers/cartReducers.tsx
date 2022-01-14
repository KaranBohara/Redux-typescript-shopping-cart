export default function cartReducers(
  state: number[] = [],
  action: { type: string; id: string }
) {
  switch (action.type) {
    case "additemcart":
      return [...state, parseInt(action.id)];
    case "removeitemcart":
      var index = state.indexOf(parseInt(action.id));
      if (index !== -1) {
        let newlist = [...state];
        newlist.splice(index, 1);
        return newlist;
      }
      return state;
    case "removeallcart":
      return [];
    default:
      return state;
  }
}
