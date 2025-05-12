import { Link } from "react-router-dom";
import React from "react";
import { Button } from "../components/ui/button";
import Footer from "./Footer";
import laptop from "../assets/laptop.png";

const Hero = () => {
  return (
    <div className="flex flex-col  m-4 gap-9 mt-16 mb-4  lg:mx-84 xl:mx-84 md:mx-64">
      <h1 className="font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] justify-baseline items-baseline md:text-center xl:text-center lg:text-center">
        {" "}
        <span className="text-[#f56551]">
          Your Journey, Our AI. Perfectly Planned!
        </span>{" "}
        Musafir.Ai
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-500 justify-baseline items-baseline  md:text-center xl:text-center lg:text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>

      <Link to={"/create-trip"}>
        <Button
          className={
            "h-10 hover:scale-105 hover:shadow-2xl cursor-pointer transition-all duration-100 flex justify-self-center  "
          }
        >
          Get Started, it's Free
        </Button>
      </Link>

      <img
        src={laptop}
        alt=""
        className="h-[300px] w-[400px] sm:h-[400px] sm:w-[500px] md:h-[700px] md:w-[850px]  lg:h-[700px]  lg:w-[850px] xl:h-[700px]  xl:w-[850px]"
      />

{/*       <Footer /> */}
    </div>
  );
};

export default Hero;
