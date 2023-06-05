import React, { useEffect, useState } from "react";
import CopyRight from "../Components/CopyRight";
import SingleProduct from "../Components/SingleProduct";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [catPath, setCatPath] = useState("all categories");

  const categories = [
    "smartphone",
    "laptop",
    "smartwatch",
    "earbuds",
    "Keyboard",
    "graphics card",
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(`https://itproducts.onrender.com/products`);
    const data = await api.json();
    setProducts(data);
    setFilterProducts(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        <h1 className=" text-3xl text-slate-700">Loading...</h1>
      </div>
    );
  }

  console.log(filterProducts);

  return (
    <div className=" overflow-hidden">
      <div className=" flex flex-col py-10 px-5">
        <h1 className=" text-3xl mb-10 text-slate-700 text-center">Products</h1>
        <div className=" flex gap-10">
          <div
            className=" w-72 p-5 flex flex-col"
            style={{ backgroundColor: "#F9FAFB" }}
          >
            <ul className=" flex flex-col gap-3">
              <li
                onClick={() => {
                  setFilterProducts(products);
                  setCatPath("all category")
                }}
                className=" cursor-pointer capitalize text-lg font-semibold"
              >
                All Categories
              </li>
              {categories.map((cat, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      setFilterProducts(
                        products.filter((product) => product.category === cat)
                      );
                      setCatPath(cat);
                    }}
                    className=" cursor-pointer capitalize text-lg font-semibold"
                  >
                    {cat}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" w-[1000px]">
            <div className=" flex gap-2">
              <Link to={"/"}>
                <p className=" text-slate-700">Home</p>
              </Link>
              <span> / </span>
              <p className=" text-blue-400">{catPath}</p>
            </div>
            <div className=" flex flex-wrap gap-3">
              {filterProducts.map((product) => {
                return <SingleProduct key={product} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default Product;
