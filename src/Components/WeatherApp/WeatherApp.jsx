import React, { useState } from 'react'
import './WeatherApp.css'

export const WeatherApp = () => {
    
    let [search,setSearch] = useState("")
    let [weather,setWeather] = useState({})
    let [icon,setIcon] = useState('/Assets/cloud.png')

    let api_key = '0c9d5912d8a5502e191b94fd7dd2bbfd';

    const searchCity = (e)=> {
        setSearch(e.target.value)
    }

    const findWeather = async ()=> {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${api_key}`
        fetch(url)
        .then((res)=> res.json())
        .then((result)=> {
             setWeather(result)
        })

        if (weather.weather[0].icon === "01d" || weather.weather[0].icon === "01n"){
            setIcon('/Assets/clear.png')
        }
        else if (weather.weather[0].icon === "02d" || weather.weather[0].icon === "02n") {
            setIcon('/Assets/cloud.png')
        }
        else if (weather.weather[0].icon === "03d" || weather.weather[0].icon === "03n") {
            setIcon('/Assets/drizzle.png')
        }
        else if (weather.weather[0].icon === "04d" || weather.weather[0].icon === "04n") {
            setIcon('/Assets/drizzle.png')
        }
        else if (weather.weather[0].icon === "09d" || weather.weather[0].icon === "09n") {
            setIcon('/Assets/rain.png')
        }
        else if (weather.weather[0].icon === "10d" || weather.weather[0].icon === "10n") {
            setIcon('/Assets/rain.png')
        }
        else if (weather.weather[0].icon === "13d" || weather.weather[0].icon === "13n") {
            setIcon('/Assets/snow.png')
        }
        else {
            setIcon('/Assets/clear.png')
        }
    }

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='search' onChange={searchCity}/>
            <div className="search-icon" onClick={findWeather}>
                <img src='/Assets/search.png' alt='' />
            </div> 
        </div>
        <div className='weather-image'>
            <img src={icon} alt=''/> 
        </div>
        <div className='weather-temp'>{Math.round(weather && weather.main && weather.main.temp)}°c </div>
        <div className='weather-location'>{weather && weather.name}</div>
        <div className='data-container'>
            <div className='element'>
                <img src='/Assets/humidity.png' alt='' className='icon' />
                <div className='data'>
                    <div className='humidity-percent'>{weather && weather.main && weather.main.humidity} %</div>
                    <div className='text'>Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src='/Assets/wind.png' alt='' className='icon' />
                <div className='data'>
                    <div className='humidity-percent'>{Math.floor(weather && weather.wind && weather.wind.speed)} km/h</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
