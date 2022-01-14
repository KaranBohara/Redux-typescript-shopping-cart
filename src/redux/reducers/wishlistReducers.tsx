export default function wishlistReducers(
  state: number[] = [],
  action: { type: string; id: string }
) {
  switch (action.type) {
    case "additemwishlist":
      return [...state, parseInt(action.id)];
    case "removeitemwishlist":
      var index = state.indexOf(parseInt(action.id));
      if (index !== -1) {
        let newlist = [...state];
        newlist.splice(index, 1);
        return newlist;
      }
      return state;
    default:
      return state;
  }
}
