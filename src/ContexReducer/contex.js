import React, { useReducer } from "react";
import { createContext } from "react";
import { Data } from "./data.js";
import { reducer, filterreducer } from "./reducer";

const Global = createContext();
function Contex({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    product: Data,
    cart: [],
  });
  const [filterstate, filterdispatch] = useReducer(filterreducer, {
    filterSort: false,
    filterInclude: false,
    filtertDelivery: false,
    filterRating: 1,
    filtersearch: "",
  });

  return (
    <>
      <Global.Provider value={{ state, dispatch, filterstate, filterdispatch }}>
        {children}
      </Global.Provider>
    </>
  );
}

export default Contex;
export { Global };
