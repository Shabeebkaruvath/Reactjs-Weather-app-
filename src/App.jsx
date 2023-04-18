import "./App.css";
import search from "./search.png";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({
    temparature: 10,
    city: "alaska",
    country: "usa",
    Discription: "light snow",
  });

  useEffect(() => {
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=0afba858d74acf07dcdb6993e6fbd8d4&unit=metric";
    axios
      .get(apiUrl)
      .then((res) =>
      setData({
        ...data,
        temparature: res.data.main.temp,
        city: res.data.name,
        country: res.data.sys.country,
        Discription: res.data.weather[0].description,
      }
      )
      )
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <div className="main">
        <input
          type="text"
          name="city name"
          required
          placeholder="Enter the city name"
        />
        <button
          type="submit
        "
        >
          <img src={search} alt="search-button" />
        </button>
      </div>
      <div className="data">
        <div className="data1">
          <h3>
            {data.city}({data.country})
          </h3>
          <h4>{data.temparature}°k</h4>
          <h4>{data.Discription}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
