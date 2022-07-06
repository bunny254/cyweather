//Importing all my dependencies
import { React, useState } from "react";
import { FiMenu } from "react-icons/fi";
import {AiOutlineClose} from 'react-icons/ai';

//Creating Navbar Component
const NavBar = () => {

  return (
    <div>
      <div className="flex bg-green-900 bg-opacity-80">
        <div className="flex flex-row flex-1 pr-40 align-middle justify-center my-4">
          <h1 className="text-white pr-12 cursor-pointer font-bold text-xl mr-20">
            CyWeather
          </h1>
        </div>
        <div className="  my-4 flex-2 pr-80 hidden md:flex">
          <a className="text-white  mx-3" href="#">
            Home
          </a>
          <a className="text-white  mx-3" href="#">
            Get Forecast
          </a>
        </div>
        <div className="block">
          {/*Importing Menu Icon from React-icons and Setting State*/}
            <FiMenu
              className="flex my-4 cursor-pointer"
              color="white"
              size="25px"
            />
  
        </div>

      </div>
    </div>
  );
};

export default NavBar;
