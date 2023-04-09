import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { customContext } from "../context/StateContext";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MYSwal = withReactContent(Swal);

const Cart = ({ item, increaseTotal, decreaseTotal }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = customContext();
  const increase = () => {
    setQuantity(quantity + 1);
    increaseTotal(item.price);
  };
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      decreaseTotal(item.price);
    }
  };

  const oneItemPrice = item.price * quantity;
  const delBtn = () => {
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
        dispatch({ type: "RemoveFromCart", payload: item });
        decreaseTotal(oneItemPrice);
        MYSwal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };
  return (
    <div className=" p-6 flex justify-between items-center mx-4">
      <div className=" flex gap-7    items-center mb-4">
        <img src={item.thumbnail} className="w-[150px]" alt="" />
        <div className="">
          <p className=" font-semibold text-slate-500 text-lg">
            {item.title.substring(0, 20)}...
          </p>
          <p className=" font-bold">${oneItemPrice.toFixed(2)}</p>
          <button
            onClick={delBtn}
            className=" bg-red-400 px-2 mt-4 rounded-full"
          >
            remove
          </button>
        </div>
      </div>
      <div className=" flex flex-col items-center ">
        <button onClick={increase}>
          <SlArrowUp />
        </button>
        <span className=" select-none">{quantity}</span>
        <button onClick={decrease} className="">
          <SlArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Cart;
