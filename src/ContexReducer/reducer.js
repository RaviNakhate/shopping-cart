export const reducer = (state, action) => {
  switch (action.type) {
    case "addtocard":
      let check = state.cart.findIndex((object) => {
        if (object.id === action.payload.id) {
          return object;
        }
      });
      if (check === -1) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      } else {
        state.cart[check].qty = state.cart[check].qty + 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }

    case "removetocard":
      return {
        ...state,
        cart: state.cart.filter((c) => {
          if (c.id !== action.payload.id) {
            return 1;
          }
        }),
      };
    case "qty":
      let check2 = state.cart.findIndex((object) => {
        if (object.id == action.payload.id) {
          return object;
        }
      });
      if (action.qty >= 1) {
        state.cart[check2].qty = action.qty;
      }
      return {
        ...state,
        cart: [...state.cart],
      };
  }
};

export const filterreducer = (state, action) => {
  switch (action.type) {
    case "inStock":
      return { ...state, filterInclude: !state.filterInclude };
    case "fastDelivery":
      return { ...state, filtertDelivery: !state.filtertDelivery };
    case "sort":
      return { ...state, filterSort: action.payload };
    case "clearall":
      return {
        ...state,
        filterSort: false,
        filterInclude: false,
        filtertDelivery: false,
        filterRating: 0,
        filtersearch: "",
      };
    case "rating":
      console.log(action.payload);
      return { ...state, filterRating: action.payload + 1 };
    case "search":
      return { ...state, filtersearch: action.payload };
  }
};
