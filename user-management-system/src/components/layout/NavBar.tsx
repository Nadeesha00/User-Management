import { useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between items-end justify-end w-full bg-gradient-to-r from-blue-400 to-indigo-600 px-6 py-4 shadow-md">
      

      <Popover>
        <PopoverTrigger asChild>
          <img
            src="my-account-login.png"
            alt="Logo"
            className="h-10 w-10  items-center  rounded-full cursor-pointer border-2 border-white hover:border-yellow-300 transition-all"
          />
        </PopoverTrigger>
        <PopoverContent className="w-32 bg-white shadow-lg rounded-md p-2">
          {loggedIn && (
            <Button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium"
            >
              Logout
            </Button>
          )}
        </PopoverContent>
      </Popover>
    </header>
  );
}

