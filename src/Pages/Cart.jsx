import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import CopyRight from "../Components/CopyRight";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cancel, order } from "../Features/Services/CartSlice";

const Cart = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="h-screen overflow-hidden flex flex-col justify-center items-center gap-3">
        <h1 className=" text-3xl tracking-wider text-slate-500 font-semibold">
          You cart is Empty!
        </h1>
        <Link to={"/product"}>
          <button className=" bg-blue-400 rounded px-5 py-2 text-blue-50">
            Add Items
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className=" flex flex-col overflow-hidden">
      <div className=" w-screen h-[100%] flex`">
        <div className=" w-[70%] flex flex-col gap-10 px-10 py-20" >
          {cartItems?.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </div>
        <div
          className=" w-[30%] pl-10 pr-12 py-20"
          style={{ backgroundColor: "#F9FAFB" }}
        >
          <div className=" mb-3 flex justify-between items-center">
            <p className=" text-xl text-slate-500">Quantity</p>
            <p className=" text-xl text-slate-500">{quantity}</p>
          </div>
          <div className=" mb-10 flex justify-between items-center">
            <p className=" text-xl text-slate-500">Total Amount</p>
            <p className=" text-xl text-slate-500">
              {totalAmount.toFixed(2)} $
            </p>
          </div>
          <div className=" flex justify-between items-center">
            <button
              onClick={() => dispatch(cancel())}
              className="bg-red-400 border hover:text-red-400 hover:bg-inherit hover:border-red-400 text-white px-2 py-1 rounded"
            >
              Cancel
            </button>
            <button onClick={() => dispatch(order())} className="bg-blue-400 border hover:text-blue-400 hover:bg-inherit hover:border-blue-400 text-white px-2 py-1 rounded">
              Order
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-auto">
        <CopyRight />
      </div>
    </div>
  );
};

export default Cart;
