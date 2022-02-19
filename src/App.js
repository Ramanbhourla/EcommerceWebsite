import React, { useEffect, useState } from "react";
import { BsFillGeoAltFill } from "react-icons/bs";

function App() {
  const [Search, setSearch] = useState("Ludhiana");
  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchapi = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q= ${Search}&units=metric&appid=d870a1b4eb6d489ee5afd463403c7e03`
      );
      const apidata = await response.json();
      setLocation(apidata.main);
    };
    fetchapi();
  }, [Search]);

  // console.log(location)
  return (
    <div>
      <h1 className="header"> Weather App</h1>
      <div className="WeatherBox">
        <input
          placeholder="Search here..."
          className="input"
          onChange={(e) => setSearch(e.target.value.toLocaleUpperCase())}
        ></input>

        {!location ? (
          <div className="noData">No Data Found</div>
        ) : (
          <div>
            <div className="cityname">
              <BsFillGeoAltFill color="cadetblue" size="26px" />
              <span className="cityname">{Search}</span>
            </div>

            <div className="temp"> Temprature : {location.temp}Cel.</div>
            <div className="minimexi">
              {" "}
              <p>Maxi Temp : {location.temp_max}</p>
              <p>Mini Temp : {location.temp_min}</p>
              <div> Humidity : {location.humidity}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
