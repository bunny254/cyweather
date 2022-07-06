//Importing all my dependencies
import React from 'react'
import Typewriter from 'typewriter-effect';

//Creating Home Component
const Home = () => {

  //Send Greetings to our users based on Current Time
  const timeOfDay= new Date()
  const hourNow=timeOfDay.getHours()

  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='col-span-6'>
          
        <h1 className='font-bold text-lg'>
          <Typewriter
          options={
            {autoStart:true,
            loop:true,
            delay:200,
            strings:["Land Safely with CyWeather"]
          }}
          />
        </h1>
        <span>
         We at CyWeather understand that Weather<br/>is one of the most important things to consider before and during a flight. Pilots must understand the meteorological conditions for safety reasons, the route being taken, and for economical reasons.
        </span>
        </div>
        <div className='col-span-6 w-96 h-96'>
          <div className='border border-green-900 mt-4'>
          <img className='' src='https://images.unsplash.com/photo-1520437358207-323b43b50729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5pZ2h0JTIwYWlycG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Airport'/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home