import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ img }) => {
  return (
    <div
      className=" slide flex items-center"
      style={{ backgroundImage: `url(${img.src})` }}
      key={img.id}
    >
      <div className=" flex flex-col gap-5 items-start pl-10 container mx-auto">
        <h1 className=" text-7xl text-violet-50 font-medium w-4/5">
          {img.headline}
        </h1>
        <p className=" text-gray-50 w-3/5">{img.body}</p>
        <Link
          to={"/product"}
          className=" text-violet-50 border mt-4 border-violet-50 hover:border-sky-400 hover:text-sky-500 duration-300 py-2 px-6"
        >
          {img.cta}
        </Link>
      </div>
    </div>
  );
};

export default Slide;
