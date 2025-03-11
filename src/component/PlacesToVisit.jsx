import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div className="mb-6">
      <h2 className="font-bold text-xl mt-6 underline mb-2 ">
        Places to Visit
      </h2>

      <div className="mt-5">
        {trip.tripData?.itinerary.map((item, index) => (
          <div>
            <h2 className="font-medium text-lg mt-4">🌞 Day: {item.Day}</h2>
            <div className="grid md:grid-rows-2 gap-5">
              {item.plan.map((place, index) => (
                <div className="my-3">
                  <h2 className="font-medium text-sm text-gray-700">
                    🕚 {place.BestTimeToVisit}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
