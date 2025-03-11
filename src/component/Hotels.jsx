import React from "react";
import Aero from "../assets/ae.jpg";
import { Link } from "react-router-dom";
import HotelCardItems from "./HotelCardItems";

function Hotels({ trip }) {
  const hotelNames = trip?.tripData?.hotelOptions?.map(
    (item) => item.hotelName
  );

  return (
    <div>
      <h2 className="font-bold text-xl underline mt-5 mb-5">
        Hotel Recommendation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {trip?.tripData?.hotel_options?.map((item) => {
          return <HotelCardItems item={item} />;
        })}
      </div>
    </div>
  );
}

export default Hotels;
