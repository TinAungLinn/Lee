import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  remove,
} from "../Features/Services/CartSlice";
import { useSelector } from "react-redux";

const CartItem = ({ cartItem }) => {
  const test = useSelector((state) => state.cart);

  const price = +cartItem.price.replace("$", "");

  const dispatch = useDispatch();

  const oneItemPrice = cartItem.quantity * price;

  return (
    <div className=" flex items-center ">
      <div className=" w-52">
        <img className=" w-44" src={cartItem.img} alt="" />
      </div>
      <div className="">
        <h1 className=" mb-3 text-3xl text-slate-700 font-semibold">
          {cartItem.title.substr(0, 25)}
        </h1>
        <p className=" text-slate-500 mb-3">
          Price:
          <span className=" text-red-400 font-semibold">
            {" "}
            {oneItemPrice.toFixed(2)}
          </span>
        </p>
        <button
          onClick={() => dispatch(remove(cartItem))}
          className="bg-red-400 border hover:text-red-400 hover:bg-inherit hover:border-red-400 text-white px-2 py-1 rounded"
        >
          Cancel
        </button>
      </div>
      <div className=" flex ms-auto flex-col gap-3 justify-center items-center">
        <span
          onClick={() => dispatch(increaseQuantity(cartItem))}
          className=" cursor-pointer select-none text-xl"
        >
          <AiOutlineArrowUp />
        </span>
        <span>{cartItem.quantity}</span>
        <span
          onClick={() =>
            cartItem.quantity > 1 && dispatch(decreaseQuantity(cartItem))
          }
          className=" cursor-pointer select-none text-xl"
        >
          <AiOutlineArrowDown />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
