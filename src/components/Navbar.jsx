import React, { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { customContext } from "../context/StateContext";
const Navbar = () => {
  const searchRef = useRef();
  const { state, setSearch } = customContext();
  const cartProducts = state.cart;

  const searchFun = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <div className="  flex justify-around  items-center mx-auto mb-4 py-2 shadow-sm  sticky top-0 z-50 bg-white">
      <Link to={"/"}>
        <h1 className=" text-3xl text-slate-500">Brand</h1>
      </Link>
      <div className=" flex justify-center gap-2 items-center">
        <input
          ref={searchRef}
          type="text"
          onChange={searchFun}
          className=" outline-none
          border 
           focus-within:border-b-2 focus:border-b-stone-500
           focus:border-slate-50 border-slate-500     rounded-full p-1 transition text-slate-500"
          placeholder="    Search"
        />
        <Link to={"/addToCart"}>
          <div className=" relative">
            <AiOutlineShoppingCart className=" text-3xl text-slate-500" />
            <small className=" absolute bg-red-400 top-[-7px] right-[-4px] px-1 rounded-[100%]">
              {cartProducts.length != 0 && cartProducts.length}
            </small>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
