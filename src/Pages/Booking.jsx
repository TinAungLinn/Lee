import React, { useState } from "react";
import HeroText from "../Components/HeroText";
import BestSelling from '../Components/BestSelling'
import CopyRight from "../Components/CopyRight";

const Booking = () => {
  const [sub, setSub] = useState("");
  const [date, setDate] = useState("");
  const [formText, setFormText] = useState("");
  const [formData, setFormData] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    setFormText("Thank for booking!");
    setFormData(sub + " " + date);
  };

  return (
    <div className=" overflow-hidden">
      <HeroText heroText={"Booking"} />
      <div className=" w-screen shadow-lg flex justify-center items-center py-16">
        <form className=" w-[700px] flex flex-wrap gap-5 justify-center items-center">
          <input
            type="text"
            required
            value={sub}
            onChange={(e) => setSub(e.target.value)}
            className=" border py-2 px-5 me-3"
            placeholder="Subject?"
          />
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className=" border py-2 px-5 me-3"
          />
          <button
            onClick={formHandler}
            className=" bg-blue-400 text-blue-50 px-10 py-2 rounded-3xl"
          >
            submit
          </button>
        </form>
      </div>
      <p className=" text-green-400 text-center">{formText}</p>
      <BestSelling/>
      <CopyRight/>
    </div>
  );
};

export default Booking;
