//Importing all my dependencies
import React from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoLinkedin,
} from "react-icons/io";

//Creating Footer Component
const Footer = () => {
  return (
    <div>
      <div className="flex flex-row bg-green-900 p-20">
        <div className="flex flex-1 flex-row">
          <h1 className="ml-16 text-white pr-12 cursor-pointer font-bold text-xl">Cy Weather</h1>
        </div>
        <div className="flex flex-1 flex-col pl-20 text-white">
          <p className="text-gray-300 mb-5 font-semibold">USEFUL LINKS</p>
          <a href="">How to Get Current Weather</a>
          <a href="">Temperature</a>
          <a href="">Wind</a>
          <a href="">Humidity</a>
        </div>
        <div className="flex flex-1 flex-col pl-20 text-white">
          <p className="text-gray-300 mb-5 font-semibold">LEGAL</p>
          <a href="">Terms & Conditions</a>
          <a href="">Airport Policy</a>
          <a href="">Customs Policy</a>
          <a href="">Grivances</a>
        </div>
        <div className="flex flex-1 flex-col pl-20  text-white">
          <p className="text-gray-300 mb-5 font-semibold">COMMUNITIES</p>
          <a href="">Telegram</a>
          <a href="">WhatsApp</a>
          <a href="">Discord Channel</a>
        </div>
        <div className=" flex flex-col flex-5 mt-10 pl-10">
          <IoLogoInstagram className="mb-2" color="white" size="23px" />
          <IoLogoTwitter className="mb-2" color="white" size="23px" />
          <IoLogoWhatsapp className="mb-2" color="white" size="23px" />
          <IoLogoLinkedin className="mb-2" color="white" size="23px" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
