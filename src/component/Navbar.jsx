import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Button } from "../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [users, setUsers] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  ); // Use state for user

  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log(users);
  }, [users]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUsers(null);
    navigate("/");
    window.location.reload();
  };

  const GetUserProfile = async (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        // console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setUsers(resp.data);
        setOpenDialog(false);
        // window.location.reload();
      });
  };

  // const handleCloseDialog = () => {
  //   setOpenDialog(false); // Close the dialog when the close button (X) is clicked or other means
  // };

  return (
    <div className="p-2 flex shadow-sm justify-between items-center   px-3  bg-white ">
      <div className="flex justify-center items-center hover:shadow-2xl ease-linear cursor-pointer transition-all duration-150">
        <img src={logo} height={42} width={42} className="ml-4" />
        <span className="ml-2 font-semibold  tracking-wider text-[#f56551] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          MUSAFIR
        </span>
        <span className="font-sans font-medium  tracking-wider text-[#003366] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
          .Ai
        </span>
      </div>

      <div>
        {users ? (
          <div className="flex sm: gap-1 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 items-center">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full">
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  className="h-[35px] w-[35px]  rounded-full"
                  alt="Profile"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign in</Button>
        )}
      </div>
      <Dialog open={openDialog} onOpenChange={(open) => setOpenDialog(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-lg mt-7">
              Sign In With Google
            </DialogTitle>
            <DialogDescription>
              Sign in to the App with Google Authentication Securely.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={login}
            className="w-full mt-5 flex gap-4 items-center "
          >
            <FcGoogle className="h-7 w-7" /> Sign In with Google
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
