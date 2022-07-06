//Importing all my dependencies
import {React,useState} from "react";
import { FiMenu } from "react-icons/fi";
import {AiOutlineClose} from 'react-icons/ai';

//Creating Navbar Component
const NavBar = () => {
  //Setting State for Mobile Nav
  const [mobNav,setMobNav]=useState(false)

  const mobHandle=()=>{
    setMobNav(!mobNav)
  }
  const escapeNav=()=>{
    setMobNav(false);
  }
  return (
    <div>
      <div className="flex bg-green-900 bg-opacity-80">
        <div className="flex flex-row flex-1 pr-40 align-middle justify-center my-4">
          <h1 className="text-white pr-12 cursor-pointer font-bold text-xl mr-20">CyWeather</h1>
        </div>
        <div className="  my-4 flex-2 pr-80 hidden md:flex">
          <a className="text-white  mx-3" href="#">
            Home
          </a>
          <a className="text-white  mx-3" href="#">
            Get Forecast
          </a>
        </div>
        <div className="block md:hidden" onClick={mobHandle}>
          {/*Importing Menu Icon from React-icons and Setting State*/}
          {!mobNav ? <AiOutlineClose size='25px' className="flex my-4 cursor-pointer"
            color="white"/>:<FiMenu
            className="flex my-4 cursor-pointer"
            color="white"
            size="25px"
          />}
        </div>
        <div className={!mobNav ? 'bg-black fixed left-0 top-0 w-[60%] h-full  border-r ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="m-4 text-green-900 cursor-pointer font-bold text-xl ">CyWeather</h1>
          <ul className="uppercase text-white">
            <li className="p-4 border-b "><a href="#">Home</a></li>
            <li className="p-4 border-b"><a href="#">Get Forecast</a></li>
            <li className="p-4"><a href="#">Hourly Forecast</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
