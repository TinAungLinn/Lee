import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../Features/Services/CartSlice";

const SingleProduct = ({product}) => {

  const dispatch = useDispatch()

  // console.log(product)

  return (
    <div className="singleProduct gap-3 hover:gap-4 hover:shadow-xl duration-300 h-96 w-80 shadow-md rounded-md flex flex-col p-4">
      <div className=" flex justify-center h-42">
        <img src={product?.img} className=" h-40" alt="" />
      </div>
      <div className=" flex gap-3 flex-col">
        <h2 className=" text-slate-800 text-xl font-semibold">
          {product?.title.substring(0, 23)}
        </h2>
        <p className=" text-slate-500 text-sm">
          Brand: <span className=" font-semibold">{product?.brand}</span>
        </p>
        <p className=" text-slate-500 text-sm">
          Price:{" "}
          <span className=" text-red-400 font-semibold">{product?.price}</span>
        </p>
        <div className=" flex justify-between">
          <Link to={`/detail/${product.id}`} state={product}>
          <button className=" text-blue-400 border hover:text-white hover:bg-blue-400  hover:border-blue-400 border-blue-400 px-2 py-1 rounded">
            More Info
          </button>
          </Link>
          <button onClick={() => dispatch(addToCart(product))} className=" bg-blue-400 border hover:text-blue-400 hover:bg-inherit hover:border-blue-400 text-white px-2 py-1 rounded">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
