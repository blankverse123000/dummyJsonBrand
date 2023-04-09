import React, { useState } from "react";
import { customContext } from "../context/StateContext";

const Card = ({ product }) => {
  const [show, setShow] = useState(false);
  const { dispatch } = customContext();

  const detail = (e) => {
    setShow(!show);
  };

  return (
    <>
      {/* Modal  */}
      <div
        className={` fixed top-[9%] left-[15%] z-50 mx-auto p-5 lg:flex lg:flex-row w-[65%]  shadow-md gap-6  bg-white  ${
          show ? "scale-1" : "scale-0"
        }`}
      >
        <button
          onClick={() => setShow(!show)}
          className=" absolute top-0 right-0  px-2 bg-red-100 rounded-full  z-[100]"
        >
          X
        </button>
        <div className="  lg:w-1/2">
          <img
            className=" h-[300px]  rounded-md my-auto"
            src={product.thumbnail}
            alt={product.thumbnail}
          />
        </div>
        <div className="  lg:w-1/2 mt-3">
          <h1 className=" text-2xl">{product.title}</h1>
          <p className="  text-xl text-slate-600 ">{product.category}</p>
          <p className=" text-slate-500">{product.description}</p>
          <div className=" flex gap-20 justify-end mt-16">
            <span>${product.price}</span>
            <button
              className=" bg-slate-500 p-2 rounded-full px-3 text-white hover:text-slate-500  hover:bg-white border hover:border-slate-500 transition-all active:translate-y-1"
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "addToCart", payload: product });
              }}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="shadow-md   relative p-2" onClick={detail}>
        <div className="">
          <img
            className=" w-[300px] h-[300px] object-contain"
            src={product.thumbnail}
            alt=""
          />
        </div>

        <h1>{product.title.substring(0, 18)}...</h1>
        <p>{product.category}</p>

        <div className="flex justify-between items-center gap-20  mb-3">
          <h1 className=" text-lg">${product.price}</h1>
          <button
            className=" bg-slate-500 p-2 rounded-full px-3 text-white hover:text-slate-500  hover:bg-white border hover:border-slate-500 transition-all active:translate-y-1"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "addToCart", payload: product });
            }}
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
