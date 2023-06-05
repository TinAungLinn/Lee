import React from "react";

const Offer = () => {
  return (
    <div className="offer w-screen h-[500px] mt-20 px-16 py-20">
      <div>
        <h1 className=" mb-4 text-6xl font-semibold text-slate-50">
          Limited Time Offer
        </h1>
        <h1 className=" mb-4 text-slate-50 text-3xl">Special Addition</h1>
        <p className="mb-4 text-slate-50 text-lg">
          It is a limited-time promotion that provides customers with an
          exclusive discount or unique product bundle
        </p>
        <button className="bg-blue-400 rounded-3xl py-2 px-10 text-teal-50">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Offer;
