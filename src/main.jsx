import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CreateTrip from "./pages/createtrip.jsx";
import App from "./App.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import { Toaster } from "./components/ui/sonner.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Viewtrip from "./view-trip/[tripId]/index.jsx";
import MyTrips from "./pages/mytrips.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/view-trip/:tripId",
    element: <Viewtrip />,
  },
  {
    path: "/my-trips",
    element: <MyTrips />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Router>
        <Navbar />
      </Router>
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
