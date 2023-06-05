import React from "react";
import FetchData from "./FetchData";
import SingleProduct from "./SingleProduct";

const BestSelling = () => {
  const products = FetchData();

  const bestSell = products.filter(
    (product) => product.id % 4 === 0 && product.id < 14
  );

  return (
    <div className=" w-screen flex flex-col items-center justify-center py-20">
      <h1 className=" text-4xl mb-20 text-slate-700 font-semibold">
        Best Selling Products
      </h1>
      <div>
        {bestSell && (
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {bestSell.map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSelling;
