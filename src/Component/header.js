import React, { useContext } from "react";
import { useRef } from "react";
import { Global } from "../ContexReducer/contex";
import { Link } from "react-router-dom";

function Header() {
  const snippet = useRef();

  const { state } = useContext(Global);
  const { filterdispatch, filterstate, dispatch } = useContext(Global);
  const { filtersearch } = filterstate;
  const cart = state.cart;
  return (
    <>
      <nav className="navbar bg-dark header justify-content-between">
        <Link to="/" className="navbar-brand text-white gotocart">
          ShopCart
        </Link>

        <form className="form-inline">
          <input
            className="form-control mr-4"
            type="search"
            value={filtersearch}
            onChange={(e) => {
              filterdispatch({ type: "search", payload: e.target.value });
            }}
            placeholder="Search"
            aria-label="Search"
          />
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              <i className="fa fa-shopping-cart"></i>
              <span className="mx-2">{cart.length}</span>
            </button>
            <div className="dropdown-menu snippet py-2 h-50">
              {cart.map((val, ind) => {
                return (
                  <div className="dropdown-item text-dark " key={ind}>
                    <div className="row d-flex ">
                      <img src={val.image} className="snippetimg" />
                      <p className="snippetname ml-3 mt-2 ">
                        <b>{val.name}</b>
                      </p>

                      <div className="cardlistdelete ">
                        <b className="pr mr-4">{val.qty}</b>
                        <i
                          className="fa fa-trash float-right text-dark"
                          onClick={() => {
                            dispatch({ type: "removetocard", payload: val });
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}

              {cart.length ? (
                <div className="row justify-content-center">
                  <button className="btn btn-primary">
                    <Link to="/cart" className="text-white gotocart">
                      Go to cart
                    </Link>
                  </button>
                </div>
              ) : (
                <div className="row justify-content-center">
                  <span className="mt-3">Card is Empty !!!</span>
                </div>
              )}
            </div>
          </div>
        </form>
      </nav>
    </>
  );
}

export default Header;
