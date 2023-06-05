import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const DetailProduct = () => {
  const { state: product } = useLocation();

  return (
    <div className=" overflow-hidden">
      <div className=" p-20 bg-gray-100 justify-center items-center grid grid-cols-1 md:grid-cols-2 w-screen">
        <div className=" flex justify-center">
          <div className=" w-96">
            <img className=" w-[100%]" src={product?.img} alt="" />
          </div>
        </div>
        <div className=" flex justify-center">
          <div className=" w-72">
            <div className=" flex mb-2 gap-1">
              <Link to={"/"}>
                <p className="text-slate-500">Home</p>
              </Link>
              <span>/</span>
              <Link to={"/"}>
                <p className="text-slate-500">Product</p>
              </Link>
            </div>
            <div className=" flex gap-3 flex-col">
              <h1 className=" text-4xl">{product.title}</h1>
              <p className=" font-semibold">
                Price:
                <span className=" text-2xl"> {product.price}</span>
              </p>
              <p className=" font-semibold">
                Brand:
                <span> {product.brand}</span>
              </p>
              <h1 className=" text-2xl">Key features</h1>
              <p className="text-slate-500 leading-loose">
                {product.description.substr(0, 200)}
              </p>
              <p className=" text-slate-500 text-lg">
                Category:
                <span> {product.category}</span>
              </p>
              <p className=" text-slate-500 text-lg">
                Rating:
                <span className=" text-red-500 font-semibold">
                  {" "}
                  {product.rating.slice(0, 3)}
                </span>{" "}
                / 5
              </p>
            </div>
            <button className=" mt-7 py-1 w-[100%] bg-blue-500 text-white">
              add to cart
            </button>
          </div>
        </div>
        <div className=" w-screen flex justify-center mt-20 ">
          <Link to={"/product"}>
            <button className=" flex gap-2 items-center text-xl duration-300 hover:text-blue-500">
              <BsArrowLeft />
              Go to back
            </button>
          </Link>
        </div>
      </div>
      <div className=" bg-gray-200 flex justify-center items-center py-5 w-screen">
        <p className=" text-slate-500">
          Copyright &#169; 2023 shopper. Powered by itking.
        </p>
      </div>
    </div>
  );
};

export default DetailProduct;
