import React, { useContext, useMemo } from "react";
import { Global } from "../ContexReducer/contex";
import Rating from "./rating";

function SingleProduct(props) {
  const { dispatch } = useContext(Global);

  return (
    <>
      <div className="card my-3 mx-4 singleproductcard" id={props.obj.id}>
        <img
          className="card-img-top singleproductimg "
          src={props.obj.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-dark">{props.obj.name}</h5>
          <p className="card-text">₹ {props.obj.price}</p>
          <p className="card-text">Delivery in {props.obj.fastDelivery}</p>
          <Rating start={props.obj.rating} show="dark" unshow="white" />
          {props.obj.inStock ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch({ type: "addtocard", payload: props.obj });
              }}
            >
              Add to Card
            </button>
          ) : (
            <button className="btn btn-primary" disabled>
              Out Of Stock
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
