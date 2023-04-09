export const reducer = (state, action) => {
  switch (action.type) {
    case "GetProduct":
      return { ...state, products: action.payload };
    case "addToCart":
      const isExisted = state.cart.find((item) => item.id == action.payload.id);
      if (isExisted) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case "RemoveFromCart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "ClearCart":
      return {
        ...state,
        cart: (state.cart = []),
      };
    default:
      return state;
  }
};
