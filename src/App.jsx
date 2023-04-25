import "./App.css";
import search from "./search.png";
import wind from "./wind.png";
import pressure from "./pressure.png";
import humidity from "./humidity.png";
import cloud from "./cloud.jpg";
import snow from "./snow.jpg";
import normal from "./normal.jpg";
import sunny from "./sunny.jpg";
import desert from "./desert.jpg";
import {  useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    temparature: 232.15,
    city: "ANTARCTICA",
    country: "",
    Discription: "snow",
    humidity: 100,
    pressure: 1050,
    speed: 3.44,
  });

 

  const [city, setCity] = useState("");
  const handle = () => {
    if (city !== "") {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0afba858d74acf07dcdb6993e6fbd8d4&unit=metric`;
      axios.get(apiUrl).then((res) =>
        setData({
          ...data,
          temparature: res.data.main.temp,
          city: res.data.name,
          country: res.data.sys.country,
          Discription: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          pressure: res.data.main.pressure,
          speed: res.data.wind.speed,
        }).console.log(res.data)
      );
    }
  };

  let backgroundImage = "";
  if (data.temparature !== null) {
    if (Math.round(data.temparature - 273.15) <= 0) 
    {
      backgroundImage = snow;
    }
    else if (Math.round(data.temparature - 273.15) > 0 && Math.round(data.temparature - 273.15) <= 10) 
    {
     backgroundImage = normal ;
   }
    else if (Math.round(data.temparature - 273.15) > 10 && Math.round(data.temparature - 273.15) <= 20) 
    {
     backgroundImage = cloud ;
   }
     else if (Math.round(data.temparature - 273.15) > 20 && Math.round(data.temparature - 273.15) <=35 )
      {
      backgroundImage =  sunny;
    } 
    else if (Math.round(data.temparature - 273.15) > 35  )
     {
      backgroundImage = desert;
    }
  }
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="main">
        <input
          type="text"
          name="city name"
          required
          placeholder="city name"
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
