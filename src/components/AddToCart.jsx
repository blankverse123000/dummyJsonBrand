import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { customContext } from "../context/StateContext";
import Cart from "./Cart";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MYSwal = withReactContent(Swal);

const AddToCart = () => {
  const [mainTotal, setMainTotal] = useState();

  useEffect(() => {
    setMainTotal(total);
  }, []);
  const {
    state: { cart },
    dispatch,
  } = customContext();

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };
  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };

  const clearCart = () => {
    MYSwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "ClearCart" });
        MYSwal.fire("Deleted!", "Your cart has been cleared.", "success");
      }
    });
  };

  const total = () => cart?.reduce((pv, cv) => pv + cv.price, 0);

  return (
    <div className=" lg:mx-60 ">
      {cart.length == 0 ? (
        <div>
          <div className="flex flex-col text-center mt-[30%] justify-center items-center">
            <h1>Your cart is Empty!</h1>
            <Link to="/">
              <button className=" bg-slate-500 px-2 rounded-md">Fill it</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="">
          <div className=" flex flex-col mt-20">
            {cart.map((item) => (
              <Cart
                key={item.id}
                item={item}
                increaseTotal={increaseTotal}
                decreaseTotal={decreaseTotal}
              />
            ))}
          </div>
          <div className=" flex justify-center my-5">
            <button
              onClick={clearCart}
              className=" bg-red-400 px-5 py-1  rounded-full"
            >
              clear
            </button>
          </div>
          <hr className="w-[50%]" />
          <div className="p-6 flex justify-between mx-4">
            <p className=" text-2xl ml-2">total</p>
            <p>${mainTotal?.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
