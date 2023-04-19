import "./App.css";
import search from "./search.png";
import wind from "./wind.png";
import pressure from "./pressure.png";
import humidity from "./humidity.png";
import {  useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    temparature: 254.8,
    city: "sample",
    country: "in",
    Discription: "Clowdy",
    humidity: 1.6,
    pressure: 1.3,
    speed: 1.9,
  });

  const [city, setCity] = useState("");
  const handle = () => {
    if (city !== "") {
      let apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0afba858d74acf07dcdb6993e6fbd8d4&unit=metric`;
      axios
        .get(apiUrl)
        .then((res) =>
          setData({
            ...data,
            temparature: res.data.main.temp,
            city: res.data.name,
            country: res.data.sys.country,
            Discription: res.data.weather[0].description,
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            speed: res.data.wind.speed,
          })
        )
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App"
     
     >
      <div className="main">
        <input
          type="text"
          name="city name"
          required
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" onClick={handle}>
          <img src={search} alt="search-button" />
        </button>
      </div>
      <div className="data">
        <div className="data1">
          <h3>
            {data.city}({data.country})
          </h3>
          <h4>{Math.round(data.temparature - 273.15)}°C</h4>
          <h4>{data.Discription}</h4>
          <div className="logo-class">
            <h4>
              <p>wind</p>
              <img src={wind} alt="" />:{data.speed}
            </h4>
            <h4>
              <p>pressure</p>
              <img src={pressure} alt="" />:{data.pressure}
            </h4>
            <h4>
              <p>humidity</p>
              <img src={humidity} alt="" />:{data.humidity}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
