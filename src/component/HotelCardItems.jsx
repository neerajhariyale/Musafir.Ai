import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aero from "../assets/hotel.jpg";
import { GetPlaceDetails, PHOTO_REF_URL } from "../service/GlobalApi";

function HotelCardItems({ item }) {
  const [PhotoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    item && GetPlacePhoto();
  }, [item]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: item.HotelName,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      //console.log("Hotel-Place:", resp.data.places);
      //console.log("Hotel-Name-URL:", resp.data.places[0].photos[5].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      //console.log("hotel -Image -URL:", PhotoUrl);
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        item.HotelName +
        "," +
        item.HotelAddress
      }
      target="_blank"
    >
      <div
        key={item.id}
        className="flex flex-col justify-between h-full hover:scale-105 transition-all duration-150 cursor-pointer rounded-2xl shadow-2xl "
      >
        <img
          src={PhotoUrl || Aero}
          className="rounded-2xl p-2 h-[180px] object-cover w-full "
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = Aero;
          }}
        />
        <div className=" flex flex-col justify-between flex-grow p-2">
          <h2 className="font-medium">{item.HotelName}</h2>
          <h2 className="text-xs text-gray-500 mt-1">📍 {item.HotelAddress}</h2>
          <h2 className="text-sm mt-2">💰 {item.Price}</h2>
          <h2 className="text-sm mt-1">⭐ {item.Ratings}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItems;
