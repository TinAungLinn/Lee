import React from "react";
import {
  FaGlobe,
  FaCertificate,
  FaPercentage,
  FaShieldAlt,
} from "react-icons/fa";
const Whyme = () => {
  return (
    <div className=" w-screen flex flex-wrap flex-col items-center justify-center py-20" style={{backgroundColor: "#F9FAFB"}}>
      <h1 className=" text-4xl mb-20 text-slate-700 font-semibold">
        Why Choose Us
      </h1>
      <div className=" flex gap-10 pr-3 items-center justify-center">
        <div className=" h-96 w-72 bg-gray-100 px-5 py-20 pt-10 flex justify-center items-center flex-col gap-3">
          <div>
            <FaGlobe className=" text-slate-700 text-7xl" />
          </div>
          <div className=" h-[60%]">
            <h1 className=" text-center text-2xl mb-3 text-slate-900 font-semibold">
              Worldwide Shipping
            </h1>
            <p className=" text-lg text-center text-slate-700">
              We offer worldwide shipping to make our products accessible to
              customers all over the world.
            </p>
          </div>
        </div>
        <div className=" h-96 w-72 bg-gray-100 px-5 py-20  pt-10 flex justify-center items-center flex-col gap-3">
          <div>
            <FaCertificate className=" text-slate-700 text-7xl" />
          </div>
          <div className=" h-[60%]">
            <h1 className="text-center text-2xl mb-3 text-slate-900 font-semibold">
            Best Quality
            </h1>
            <p className="  text-lg text-center text-slate-700">
            We believe in providing our customers with only the best quality products.
            </p>
          </div>
        </div>
        <div className=" h-96 w-72 bg-gray-100 px-5 py-20 pt-10 flex justify-center items-center flex-col gap-3">
          <div>
            <FaPercentage className=" text-slate-700 text-7xl" />
          </div>
          <div className=" h-[60%]">
            <h1 className=" text-center text-2xl mb-3 text-slate-900 font-semibold">
            Best Offers
            </h1>
            <p className=" text-lg text-center text-slate-700">
            We pride ourselves on offering the best deals and discounts to our customers.
            </p>
          </div>
        </div>
        <div className=" h-96 w-72 bg-gray-100 px-5 py-20 pt-10 flex justify-center items-center flex-col gap-3">
          <div>
            <FaShieldAlt className=" text-slate-700 text-7xl" />
          </div>
          <div className=" h-[60%]">
            <h1 className=" text-center text-2xl mb-3 text-slate-900 font-semibold">
            Secure Payments
            </h1>
            <p className=" text-lg text-center text-slate-700">
            We offer a range of secure payment options to ensure that your transactions are safe and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyme;
