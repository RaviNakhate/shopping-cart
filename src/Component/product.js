import React, { useContext } from "react";
import SingleProduct from "./singleproduct";
import { Global } from "../ContexReducer/contex";

function Product() {
  const { state } = useContext(Global);
  const { filterstate } = useContext(Global);
  const data = state.product;

  let maindata = data.filter((val, i) => {
    if (val.rating >= filterstate.filterRating) {
      return 1;
    }
  });
  if (filterstate.filtertDelivery) {
    maindata = maindata.filter((val, ind) => {
      if (val.fastDelivery <= 3) {
        return 1;
      }
    });
  }
  if (filterstate.filterSort == "lowtohigh") {
    maindata = maindata.sort((obj, ind) => {
      if (obj.price > ind.price) {
        return 1;
      } else {
        return -1;
      }
    });
  } else if (filterstate.filterSort == "hightolow") {
    maindata = maindata.sort((obj, ind) => {
      if (obj.price < ind.price) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  if (filterstate.filterInclude) {
    maindata = maindata.filter((val, ind) => {
      if (val.inStock == true) {
        return 1;
      }
    });
  }
  if (filterstate.filtersearch) {
    maindata = maindata.filter((val) => {
      if (val.name.includes(filterstate.filtersearch)) {
        return 1;
      }
    });
  }
  return (
    <>
      {maindata.length != 0 ? (
        maindata.map((val, index) => {
          return <SingleProduct obj={val} key={index} />;
        })
      ) : (
        <div className="container-fluid">
          <div className="row mt-5  justify-content-center">
            <h2>No product Found</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
