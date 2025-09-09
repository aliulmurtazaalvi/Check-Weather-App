import { useState } from 'react'
import './App.css'

export default function App() {
  let [cityName, setCityName] = useState('');
  let [wDetails, setWDetails] = useState();

  let getData = (event)=>{
    event.preventDefault();

    fetch(`http://api.weatherstack.com/current?access_key=35441bfaa1c563968ba93b7af97ae246&query=${cityName}`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      if(finalRes.error && finalRes.error.code === 615){
        setWDetails(undefined)
      }
      else{
        setWDetails(finalRes)
      }
    })

    setCityName('')
  }

  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-6 text-white flex flex-col h-[90vh]">
        
        <header className="text-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-wide">Weather App</h1>
          <p className="text-sm text-gray-200">Check the forecast instantly</p>
        </header>

        {/* Search */}
        <form onSubmit={getData} className="flex items-center bg-white/20 rounded-xl overflow-hidden shadow-md mb-6">
          <input
            type="text"
            placeholder="Enter city name..."
            value={cityName}
            onChange={(event)=>setCityName(event.target.value)}
            className="w-full p-3 bg-transparent text-white placeholder-gray-300 focus:outline-none"
          />
          <button className="px-5 py-3 bg-pink-600 hover:bg-pink-700 font-semibold transition-colors">
            Search
          </button>
        </form>
        
        {(wDetails!==undefined)
        ?
        <>
          <div className="bg-white/20 rounded-xl shadow-lg p-6 text-center flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">
            {wDetails.location.name}, {wDetails.location.region}, {wDetails.location.country}
          </h2>
            <p className="text-lg text-gray-200 mb-4">{wDetails.location.localtime}</p>
            <div className="flex justify-center items-center gap-4">
              <span className="text-6xl font-extrabold">{wDetails.current.temperature}°C</span>
              <img
                src={wDetails.current.weather_icons[0]}
                alt="weather-icon"
                className="w-16 h-16"
              />
            </div>
            <p className="mt-3 font-medium text-gray-100">{wDetails.current.weather_descriptions[0]}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <p className="font-bold">Humidity</p>
              <p className="text-lg">{wDetails.current.humidity}%</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <p className="font-bold">Wind</p>
              <p className="text-lg">{wDetails.current.wind_speed} km/h</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <p className="font-bold">Feels Like</p>
              <p className="text-lg">{wDetails.current.feelslike}°C</p>
            </div>
          </div>
        </>
        :
        <p className="text-center text-gray-300">No Data Found</p>}
      </div>
    </div>
  );
}
