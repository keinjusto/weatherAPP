import React, { useState } from "react";
import Form from "./form";
import Card from "./card";




function Panel() {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=b5b8325e2b0ab18497930588921ade73&lang=es";
  let cityUrl = "&q=";
  let foreCastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?appid=b5b8325e2b0ab18497930588921ade73&lang=es";

  const [Weather, setWeather] = useState([]);
  const [Forecast, setForecast] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Show, setShow] = useState(false);
  const [Location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    urlWeather = urlWeather + cityUrl + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    foreCastUrl = foreCastUrl + cityUrl + loc;

    await fetch(foreCastUrl)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <>
       <Form newLocation={getLocation} /> 
      <Card weatherdata={Weather} loaddata={Loading} showdata={Show} forecastdata={Forecast} />
    </>
  );
}

export default Panel;

