import React from "react";

const Consultation = () => {
  return (
    <div className="consultation w-screen flex items-center justify-between mt-20 px-16 py-20">
      <div>
        <h1 className=" mb-4 text-3xl text-slate-50">
          Are you confused,which product is suitable for you ?
        </h1>
        <h1 className=" mb-4 text-blue-400 font-semibold text-4xl">
          Need consultation?
        </h1>
        <p className=" text-slate-50 text-lg">
          Get ultimate solution from our talent
        </p>
      </div>
      <button className="bg-blue-400 rounded-3xl py-2 px-10 text-teal-50">
        BookNow
      </button>
    </div>
  );
};

export default Consultation;
