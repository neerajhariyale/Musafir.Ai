import React, { useEffect, useState } from "react";
import MyTripImage from "../assets/mytrip.jpg";
import { GetPlaceDetails, PHOTO_REF_URL } from "../service/GlobalApi";
import { Link } from "react-router-dom";

const UserTripCardItem = ({ trip }) => {
  const [PhotoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      // console.log(resp.data.places)
      // console.log(resp.data.places[0].photos[3].name)

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      // console.log(PhotoUrl)
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link to={"/view-trip/" + trip?.id}>
      <div className="flex flex-col justify-between h-full hover:scale-105 transition-all duration-150 cursor-pointer rounded-2xl shadow-2xl">
        <img
          src={PhotoUrl || MyTripImage}
          className="rounded-xl object-cover p-2 h-[180px] w-full "
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = MyTripImage;
          }}
        />
        <div className="flex flex-grow flex-col ">
          <h2 className="font-bold text-lg pl-2">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-gray-500 text-sm pl-2 mb-3">
            {trip?.userSelection.numberOfDays} Days trip with{" "}
            {trip?.userSelection?.budget} budget
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default UserTripCardItem;
