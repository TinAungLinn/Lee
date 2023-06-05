import React from "react";
import HeroText from "../Components/HeroText";
import CopyRight from "../Components/CopyRight";

const couses = [
  {
    title: "Sales",
    desc: " Expert sales assistance for all customers. Our sales team is dedicated to providing expert guidance to customers",
    phn: "1800 123 4567",
  },
  {
    title: "Complaints",
    desc: "We take customer satisfaction seriously and strive to address any complaints in a timely and efficient manner",
    phn: "1800 123 4567",
  },
  {
    title: "Returns",
    desc: "Hassle-free returns and exchanges. We understand that sometimes products just don't work out. ",
    phn: "1800 123 4567",
  },
  {
    title: "Marketing",
    desc: "Our marketing team works collaboratively with businesses to help them grow and succeed",
    phn: "1800 123 4567",
  },
];

const Contact = () => {
  return (
    <div className=" overflow-hidden">
      <HeroText heroText={"Contact us"} />
      <div className=" py-16">
        <h1 className=" mb-16 text-center text-5xl text-slate-700 font-semibold">
          We're here to help you
        </h1>
        <div className=" flex flex-wrap justify-center items-center gap-7">
          {couses.map((couse) => {
            return (
              <div
                className=" w-72 h-72 py-10 px-5 flex flex-col gap-3"
                style={{ backgroundColor: "#F9FAFB" }}
              >
                <h1 className="  text-center text-2xl text-slate-700 font-semibold">
                  {couse.title}
                </h1>
                <p className="  leading-relaxed text-center text-lg text-slate-700">
                  {couse.desc}
                </p>
                <a href={`tel:${couse.phn}`} className="text-center text-xl text-blue-400 font-semibold">
                  {couse.phn}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <CopyRight/>
    </div>
  );
};

export default Contact;
