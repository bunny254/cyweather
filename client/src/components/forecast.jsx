//Importing all my dependecies
import {React, useState} from 'react';
import axios from "axios";
import {GiWindsock} from 'react-icons/gi';
import {TbTemperature,TbCloud} from 'react-icons/tb';
import {WiHumidity} from 'react-icons/wi';

//Creating Forecast component
const ForeCast = () => {
  //Setting latitude values to react to input and not fixed values
  const [latitude, setLatitude] = useState();

  //Setting longitude values to react to input and not fixed values
  const [longitude, setLongitude] = useState();

  //Declaring an empty object to store values of input data
  const [data, setData] = useState({});

  //Declaring my query API url
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&current_weather=true`;

  //Creating the get Weather Fucntion
  const getWeather = (e) => {
    if (e.key === "Enter") {
       axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLatitude();
      setLongitude();
    }
  };

  //Slide effect
  const slideLeft=()=>{
    const slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft - 300;
  }

  const slideRight=()=>{
    const slider=document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft + 300;
  }
  return (
    <div>
      <div className="flex flex-col">
        <h1>LONGITUDE:</h1>
        <span></span>
        <h1>LATITUDE:</h1>
        <span></span>
        {data.current_weather? <h2 className='mb-5'>Day: {data.current_weather.time}</h2> : null}
      </div>
      <div className="grid grid-cols-6 bg-gray-300  h-80 w-2/4 rounded-2xl mb-5">
        <div className="mt-16 col-span-2">
        <h1 className="font-bold">Current Weather</h1>
        </div>
        <div className="col-span-3 grid grid-row">
          <div className="flex flex-row">
          <h1>Temperature</h1><TbTemperature className="my-1"/>:
         {/** <h2>{data.current_weather.temperature}</h2> */}
          </div>
          <div className="flex flex-row">
          <h1>WindSpeed</h1><GiWindsock className="mx-1 my-1"/>:
          {/*<h2>{data.current_weather.temperature}</h2> */}
          </div>
          <div className="flex flex-row">
          <h1>Cloud Cover</h1><TbCloud className="my-1"/>:
          {/* <h2>{data.current_weather.temperature}</h2> */}
          </div>
          <div className="flex flex-row">
          <h1>Humidity Levels</h1><WiHumidity className="my-1"/>:
          {/*<h2>{data.hourly.relativehumidity_2m[0]}</h2> */}
          </div>
        </div>
      </div>
      <div className="relative flex items-center">
        <div id='slider' className="flex flex-row w-full h-full overflow-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          <div className="flex flex-row gap-5 cursor-pointer ease-in-out duration-300">
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>6am</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>7am</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>8am</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>9am</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>10am</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>11am</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>12pm</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>1pm</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>2pm</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>3pm</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>4pm</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>5pm</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>6pm</h2>
          </div>
          <div className="bg-gray-300 h-28 w-40 rounded-2xl">
            <h1>Temperature:</h1>
            <h1>Wind Speed:</h1>
            <h1>Cloud Cover:</h1>
            <h1>Humidity Levels:</h1>
            <h2>8am</h2>
          </div>
          </div>          
          </div>       
        
     </div>
     <div className="flex ml-20 mt-5 mb-5 gap-7">
            <button className="bg-green-600 rounded-full text-center px-8 py-1 cursor-pointer hover:opacity-50" onClick={slideLeft}>Left</button>
            <button className="bg-green-600 rounded-full text-center px-8 py-1 cursor-pointer hover:opacity-50" onClick={slideRight}>Right</button>
          </div>
    </div>
  )
}

export default ForeCast