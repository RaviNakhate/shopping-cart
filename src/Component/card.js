import React from "react";
import Cardlist from "./cardlist";
import Total from "./total";

function Card() {
  return (
    <>
      <div className="cardlist">
        <Cardlist />
      </div>
      <div className="total mr-2 bg-dark text-white">
        <Total />
      </div>
    </>
  );
}

export default Card;
