import { Link } from "react-router-dom";
import React from "react";
import { Button } from "../components/ui/button";
import Footer from "./Footer";
import laptop from "../assets/laptop.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 mt-16 mb-4 ">
      <h1 className="font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] text-center">
        {" "}
        <span className="text-[#f56551]">
          Your Journey, Our AI. Perfectly Planned!
        </span>{" "}
        Musafir.Ai
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>

      <Link to={"/create-trip"}>
        <Button
          className={
            "h-10 hover:scale-105 hover:shadow-2xl cursor-pointer transition-all duration-100"
          }
        >
          Get Started, it's Free
        </Button>
      </Link>

      <img
        src={laptop}
        alt=""
        className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
      />

      <Footer />
    </div>
  );
};

export default Hero;
