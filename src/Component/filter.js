import React, { useContext } from "react";
import { Global } from "../ContexReducer/contex";
import Rating from "./rating";

function Filter() {
  const { filterdispatch, filterstate } = useContext(Global);
  const { filterSort, filtertDelivery, filterInclude, filterRating } =
    filterstate;

  return (
    <>
      <div className="row mb-2">
        <input
          type="radio"
          className="custom-control mr-2 "
          checked={filterSort == "lowtohigh" ? true : false}
          onChange={() => {
            filterdispatch({ type: "sort", payload: "lowtohigh" });
          }}
        />
        <span> Price: Low to High</span>
      </div>

      <div className="row mb-2">
        <input
          type="radio"
          className="custom-control mr-2 "
          name="sort"
          checked={filterSort == "hightolow" ? true : false}
          onChange={() => {
            filterdispatch({ type: "sort", payload: "hightolow" });
          }}
        />
        <span> Price: High to Low</span>
      </div>

      <div>
        <div className="row mb-2">
          <input
            type="checkbox"
            className="custom-control mr-2 "
            checked={filterInclude}
            onChange={() => {
              filterdispatch({ type: "inStock" });
            }}
          />
          <span> Unclude Out Of Stock</span>
        </div>
      </div>

      <div>
        <div className="row mb-2">
          <input
            type="checkbox"
            className="custom-control mr-2 "
            checked={filtertDelivery}
            onChange={() => {
              filterdispatch({ type: "fastDelivery" });
            }}
          />
          <span>Fast Delivery (within 3 days)</span>
        </div>
      </div>
      {/* onClick={(i) => {
                filterdispatch({ type: "rating", payload: i });
              }} */}
      <div>
        <div className="row ">
          <span className="mr-2 "> Rating :</span>
          <Rating
            start={filterRating}
            show="primary"
            unshow="white"
            onClick={(i) => {
              filterdispatch({ type: "rating", payload: i });
            }}
          />
        </div>
      </div>
      <div>
        <div className="row mt-5 mr-2 justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              filterdispatch({ type: "clearall" });
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
