import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../service/FirebaseConfig";
import { toast } from "sonner";
import InfoSection from "../../component/InfoSection";
import Hotels from "../../component/Hotels";
import PlacesToVisit from "../../component/PlacesToVisit";
import Footer from "../../component/Footer";

const Viewtrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  const GetTripData = async () => {
    const docRef = doc(db, "AiTrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //console.log("doccccument", docSnap.data());
      setTrip(docSnap.data());
    } else {
      //console.log("no such documnet");
      toast("NO TRIP FOUND");
    }
  };
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information Section */}
      <InfoSection trip={trip} />

      {/* Recommended Hotels */}
      <Hotels trip={trip} />

      {/* Daily plan */}
      <PlacesToVisit trip={trip} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Viewtrip;
