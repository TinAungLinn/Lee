import React from "react";
import HeroText from "../Components/HeroText";
import OurTeams from "../Components/OurTeams";
import Whyme from "../Components/Whyme";
import CopyRight from "../Components/CopyRight";

const About = () => {
  return (
    <div className=" overflow-hidden">
      <HeroText heroText={"About Us"} />
      <div
        className="w-screen flex justify-between p-20 items-center"
        style={{ backgroundColor: "#F9FAFB" }}
      >
        <div className=" w-[530px]">
          <h1 className=" text-6xl text-slate-700 font-semibold mb-3">
            Who we are?
          </h1>
          <p className=" text-slate-700 leading-relaxed">
            We are a team of passionate individuals committed to providing
            high-quality products and exceptional customer service. Our mission
            is to make technology accessible to everyone, no matter where they
            are in the world. Shop with us and experience the difference of
            working with a dedicated and customer-centric team.
          </p>
        </div>
        <div className=" w-[600px]">
          <img
            className=" me-auto w-[80%]"
            src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
      </div>
      <OurTeams />
      <Whyme />
      <CopyRight/>
    </div>
  );
};

export default About;
