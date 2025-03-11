import React, { useEffect, useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { Button } from "../components/ui/button";
import { FaShare } from "react-icons/fa";
import AE from "../assets/bk.jpg";
import { GetPlaceDetails, PHOTO_REF_URL } from "../service/GlobalApi";

function InfoSection({ trip }) {
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
    <div>
      <img
        src={PhotoUrl || AE}
        className="h-[340px] w-full object-cover rounded-2xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = AE;
        }}
      />

      <div className="flex justify-between gap-6 items-center flex-wrap">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl mb-4 lg:mb-2">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="gap-5 flex flex-wrap">
            <h2 className="p-1 px-3 bg-gray-200 text-gray-500 rounded-full text-[16px] ">
              🗓️ {trip?.userSelection?.numberOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 text-gray-500 rounded-full ">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 text-gray-500 rounded-full ">
              🥂 No. of Traveler: {trip?.userSelection?.traveler} People
            </h2>
          </div>
        </div>
        <Button>
          <FaShare />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
