//Importing all my dependencies

import { React, useState } from "react";
import axios from "axios";

//Creating the landing page component
const LandingPage = () => {
  //Declaring an emoty object to store values of input data
  const [data, setData] = useState({});

  //Setting latitude values to react to input and not fixed values
  const [latitude, setLatitude] = useState();

  //Setting longitude values to react to input and not fixed values
  const [longitude, setLongitude] = useState();

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

  return (
    <div>
      LandingPage
      <div>
        <input
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Enter Latitude"
        />
        <input
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          onKeyPress={getWeather}
          placeholder="Enter Longitude"
        />
      </div>
    </div>
  );
};

export default LandingPage;
