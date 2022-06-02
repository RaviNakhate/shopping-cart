import React, { useContext } from "react";
import { Global } from "../ContexReducer/contex";

function Total() {
  const { state } = useContext(Global);
  const total = state.cart.reduce((tot, obj) => {
    return tot + obj.price * obj.qty;
  }, 0);

  const count = state.cart.reduce((tot, obj) => {
    return tot + 1;
  }, 0);

  console.log(`totoa is ${total} `);
  return (
    <>
      <div className="ml-3 mt-1">
        <h4>Subtotal ( {count} )</h4>
        <p>
          <b>Total ₹ {total}</b>
        </p>
      </div>

      <div className="row mt-5 justify-content-center">
        <button className="btn btn-primary">Procced to Checkout</button>
      </div>
    </>
  );
}

export default Total;
