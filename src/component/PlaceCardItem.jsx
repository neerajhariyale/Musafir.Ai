import React, { useEffect, useState } from "react";
import AE from "../assets/kshh.png";
import { Button } from "../components/ui/button";
import { IoLocation } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_REF_URL } from "../service/GlobalApi";

const PlaceCardItem = ({ place }) => {
  const [PhotoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.PlaceName,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      //console.log("Hotel-Place:", resp.data.places);
      //console.log("Hotel-Name-URL:", resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[5].name
      );
      //console.log("hotel -Image -URL:", PhotoUrl);
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place.PlaceName}
      target="_blank"
    >
      <div className="shadow-xl border rounded-xl p-3 w-full mt-2 gap-5 hover:scale-105 transition-all  hover:shadow-2xl cursor-pointer flex-col flex text-center items-center md:text-start lg:text-start md:justify-self-start lg:justify-self-start  md:flex-row  lg:flex-row xl:flex-row  md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 ">
        <img
          src={PhotoUrl || AE}
          className="xl:w-[140px] xl:h-[155px] lg:w-[140px] lg:h-[155px] md:w-[140px] md:h-[155px] rounded-xl w-[100px] h-[100px] "
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = AE;
          }}
        />
        <div className="">
          <h2 className="font-bold text-lg">{place.PlaceName}</h2>
          <p className="text-sm text-gray-400 text-start">
            {place.PlaceDetails}
          </p>
          <h2 className="mt-2 text-start">⏰ {place.TimeToTravel}</h2>
          <h2 className="mt-2 text-start">🎟️ {place.TicketPricing}</h2>
          {/* <Button className='bg-smokewhite'><CiLocationOn className='bg-white text-black'  /></Button> */}
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;
