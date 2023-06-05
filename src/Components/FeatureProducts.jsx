import React from "react";
import FetchData from "./FetchData";
import SingleProduct from "./SingleProduct";

const FeatureProducts = () => {
  const products = FetchData();

  const featuredProducts = products.filter((item) => item.id % 5 === 0);


  return (
    <div className=" flex justify-center flex-col items-center my-7 gap-5">
      <h1 className=" text-4xl mt-2 text-slate-700 font-semibold">
        Feature Products
      </h1>
      <div>
        {featuredProducts && (
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {featuredProducts.map((product) => {
              return (
                <SingleProduct key={product.id} product={product}/>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
