//Importing all my dependencies

import { React, useState } from "react";
import axios from "axios";
import { GiWindsock } from "react-icons/gi";
import { TbTemperature, TbCloud } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";

//Creating the landing page component
const SearchPage = () => {
  //Declaring an empty object to store values of input data
  const [data, setData] = useState({});

  //Setting latitude values to react to input and not fixed values
  const [latitude, setLatitude] = useState();

  //Setting longitude values to react to input and not fixed values
  const [longitude, setLongitude] = useState();

  //Declaring my query API url
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&current_weather=true`;

  //Creating the get Weather Fucntion
  const getWeather = async (e) => {
    if (e.key === "Enter") {
      await axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLatitude();
      setLongitude();
    }
  };

  //Slide effect
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div>
      <h1 className="font-size mb-8 text-2xl font-bold text-center underline">
        Get Forecast
      </h1>
      <div className="flex justify-center">
        <input className="border border-green-600 rounded-lg mr-4"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Enter Latitude"
        />
        <input className="border border-green-600 rounded-lg ml-4 mr-3"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          onKeyPress={getWeather}
          placeholder="Enter Longitude & Enter"
        />
      </div>

      <div className="mt-2 flex flex-row justify-center gap-12">
        <h1 className="mr-12">LONGITUDE{longitude}</h1>
        <span></span>
        <h1 className="mr-4 ">LATITUDE{latitude}</h1>
      </div>
      <div className="flex justify-center">
      {data.current_weather ? (
          <h2 className="mb-5 mr-12 text-xl">Day: {data.current_weather.time}</h2>
        ) : null}
      </div>
      <div className="grid grid-cols-6 bg-cyan-200  h-40 w-96 gap-3 rounded-2xl mb-5">
        <div className="mt-16 col-span-3">
          <h1 className="font-bold mb-5">Current Weather</h1>
        </div>
        <div className="col-span-3 grid grid-row">
          <div className="flex flex-row">
            <h1>Temperature</h1>
            <TbTemperature className="my-1" />:
            {data.current_weather ? ( <h2>{data.current_weather.temperature}</h2>) : null}
          </div>
          <div className="flex flex-row">
            <h1>WindSpeed</h1>
            <GiWindsock className="mx-1 my-1" />:
            {data.current_weather ? ( <h2>{data.current_weather.windspeed}</h2>) :null}
          </div>
          <div className="flex flex-row">
            <h1>Cloud Cover</h1>
            <TbCloud className="my-1" />:
            {data.current_weather ? ( <h2>{data.hourly.cloudcover_mid[0]}</h2>) : null}
          </div>
          <div className="flex flex-row">
            <h1>Humidity Levels</h1>
            <WiHumidity className="my-1" />:
            {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[0]}</h2>) : null}
          </div>
        </div>
      </div>
      <h1 className="font-size mb-8 text-2xl font-bold text-center underline">
        Hourly Forecast
      </h1>
      <div className="relative flex items-center">
        <div
          id="slider"
          className="flex flex-row w-full h-full overflow-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          <div className="flex flex-row gap-5 cursor-pointer ease-in-out duration-300">
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[6]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[6]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[6]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[6]}</h2>) : null}
              </div>
              <h2>6am</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[7]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[7]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[7]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[7]}</h2>) : null}
              </div>
              <h2>7am</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[8]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[8]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[8]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[8]}</h2>) : null}
              </div>
              <h2>8am</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[9]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[9]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[9]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[9]}</h2>) : null}
              </div>
              <h2>9am</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[10]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[10]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[10]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[10]}</h2>) : null}
              </div>
              <h2>10am</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[11]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[11]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[11]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[11]}</h2>) : null}
              </div>
              <h2>11am</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[12]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[12]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[12]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[12]}</h2>) : null}
              </div>
              <h2>12pm</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[13]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[13]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[13]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[13]}</h2>) : null}
              </div>
              <h2>1pm</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[14]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[14]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[14]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[14]}</h2>) : null}
              </div>
              <h2>2pm</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[15]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[15]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[15]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[15]}</h2>) : null}
              </div>
              <h2>3pm</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[16]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[16]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[16]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[16]}</h2>) : null}
              </div>
              <h2>4pm</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[17]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[17]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[17]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[17]}</h2>) : null}
              </div>
              <h2>5pm</h2>
            </div>
            <div className="bg-gray-300 h-32 w-40 rounded-2xl">
            <div className="flex flex-row">
              <h1>Temperature:</h1>
              {data.current_weather ? (<h2>{data.hourly.temperature_2m[18]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Wind Speed:</h1>
              {data.current_weather ? (<h2>{data.hourly.windspeed_120m[18]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Cloud Cover:</h1>
              {data.current_weather ? (<h2>{data.hourly.cloudcover_mid[18]}</h2>) : null}
              </div>
              <div className="flex flex-row">
              <h1>Humidity Levels:</h1>
              {data.current_weather ? (<h2>{data.hourly.relativehumidity_2m[18]}</h2>) : null}
              </div>
              <h2>6pm</h2>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex ml-20 mt-5 mb-5 gap-7">
        <button
          className="bg-green-600 rounded-full text-center px-8 py-1 cursor-pointer hover:opacity-50"
          onClick={slideLeft}
        >
          Left
        </button>
        <button
          className="bg-green-600 rounded-full text-center px-8 py-1 cursor-pointer hover:opacity-50"
          onClick={slideRight}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
