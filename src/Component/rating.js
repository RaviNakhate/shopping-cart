import React from "react";

export default function Rating(props) {
  const start = props.start;
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} id={i} onClick={() => props.onClick(i)}>
            {start > i ? (
              <i className={`fa fa-star text-${props.show} m-1`}></i>
            ) : (
              <i className={`fa fa-star text-${props.unshow} m-1`}></i>
            )}
          </span>
        );
      })}
    </>
  );
}
