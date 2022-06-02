import React, { useContext } from "react";
import { Global } from "../ContexReducer/contex";
import Rating from "./rating";

function Cardlist() {
  const { state, dispatch } = useContext(Global);
  const cart = state.cart;
  return (
    <>
      {cart ? (
        cart.map((val, ind) => {
          return (
            <div key={ind} className="mx-5 card cardlistcard my-4">
              <div className="row  ml-3 mt-2   align-content-center">
                <img className="gotocartimg  " src={val.image} />
                <div className="ml-3">
                  <h5 className=" text-dark">{val.name}</h5>
                  <p className="">₹ {val.price}</p>
                  <span className="text-dark ">
                    <input
                      type="number"
                      value={val.qty}
                      min="1"
                      onChange={(e) => {
                        dispatch({
                          type: "qty",
                          payload: val,
                          qty: e.target.value >= 0 ? e.target.value : 1,
                        });
                      }}
                      className="bg-success border border-0 text-white pl-5  w-50"
                    />
                  </span>
                </div>
                <div className="mt-4 ">
                  <Rating start={val.rating} show="dark" unshow="white" />
                </div>
                <div
                  className="delete mt-4 border"
                  onClick={(e) => {
                    dispatch({
                      type: "removetocard",
                      payload: val,
                      qty: e.target.value,
                    });
                  }}
                >
                  <i className="fa fa-trash fa-2x   text-dark"></i>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Cardlist;
