import React from "react";
import Spinner from "./spinner";
import Fecha from "./fecha";
import {BsLinkedin} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"
import {ImWhatsapp} from "react-icons/im"

const Card = ({ loaddata, showdata, weatherdata, forecastdata }) => {
  var url = "";
  var iconUrl = "";

  if (loaddata) {
    return <Spinner />;
  }

  if (showdata) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weatherdata.weather[0].icon + ".png";

    var iconUrl0 = "";
    var iconUrl1 = "";
    var iconUrl2 = "";
    var iconUrl3 = "";
    var iconUrl4 = "";

    var forecastDate0 = "";
    var forecastDate1 = "";
    var forecastDate2 = "";
    var forecastDate3 = "";
    var forecastDate4 = "";

    iconUrl0 = url + forecastdata.list[0].weather[0].icon + ".png";
    iconUrl1 = url + forecastdata.list[1].weather[0].icon + ".png";
    iconUrl2 = url + forecastdata.list[2].weather[0].icon + ".png";
    iconUrl3 = url + forecastdata.list[3].weather[0].icon + ".png";
    iconUrl4 = url + forecastdata.list[4].weather[0].icon + ".png";

    forecastDate0 = forecastdata.list[7].dt_txt.substring(0, 10);
    forecastDate1 = forecastdata.list[15].dt_txt.substring(0, 10);
    forecastDate2 = forecastdata.list[23].dt_txt.substring(0, 10);
    forecastDate3 = forecastdata.list[31].dt_txt.substring(0, 10);
    forecastDate4 = forecastdata.list[39].dt_txt.substring(0, 10);
  }

  return (
    <>
      {showdata === true ? (
        <>
          <div>
            <div className="location">
              <Fecha />
              <h1 className="name">{weatherdata.name}</h1>
            </div>
            {/*//* pintamos icono central */}
            <div className="icon">
              {/*//*pintamos el icono del clima actual */}
              <img src={iconUrl} alt="icon" className="img" />
              {/* //*pintamos la temperatura */}
              <h1 className="temp2">
                {(weatherdata.main.temp - 273.15).toFixed(1)}ºC
              </h1>
            </div>
            {/* //*pintamos la descripcion del dia  */}
            <div className="description">
              <h5 className="temp">
                Temperatura máxima {(weatherdata.main.temp - 273.15).toFixed(1)}
                ºC
              </h5>{" "}
              |
              <h5 className="temp">
                Temperatura mínima{" "}
                {(weatherdata.main.temp_min - 273.15).toFixed(1)}ºC
              </h5>{" "}
              |<h5 className="temp">Humedad {weatherdata.main.humidity}%</h5> |
              <h5 className="temp">
                sensación térmica{" "}
                {(weatherdata.main.feels_like - 273.15).toFixed(1)}ºC
              </h5>{" "}
              |
              <h5 className="temp">
                Velocidad del viento {weatherdata.wind.speed}m/s
              </h5>
            </div>
            {/* //*pintamos los siguientes 5 dias */}
            <div className="nextdays">
              <h2 className="titule">Los proximos 5 dias</h2>
              {/* //*ponemos un contenedor para trabajar mejor los estilos */}
              <div className="container-days">
                {/* //*ubicamos los 5 dias */}
                <div className="day1 day">
                  {/* //*ponemos la fecha del dia 1 */}
                  <h1 className="foreday">{forecastDate0}</h1>
                  {/* //*ponemos el icono */}
                  <img src={iconUrl0} alt="icono" className="nextimg" />
                  {/* //*pintamos la temperatura */}
                  <h3 className="temp4">
                    {(forecastdata.list[7].main.feels_like - 273.15).toFixed(1)}
                    ºC
                  </h3>
                </div>
                <div className="day2 day">
                  {/* //*ponemos la fecha del dia 2 */}
                  <h3 className="foreday">{forecastDate1}</h3>
                  {/* //*ponemos el icono */}
                  <img src={iconUrl1} alt="icono" className="nextimg" />
                  {/* //*pintamos la temperatura */}
                  <h3 className="temp4">
                    {(forecastdata.list[15].main.feels_like - 273.15).toFixed(
                      1
                    )}
                    ºC
                  </h3>
                </div>
                <div className="day3 day">
                  {/* //*ponemos la fecha del dia 3 */}
                  <h3 className="foreday">{forecastDate2}</h3>
                  {/* //*ponemos el icono */}
                  <img src={iconUrl2} alt="icono" className="nextimg" />
                  {/* //*pintamos la temperatura */}
                  <h3 className="temp4">
                    {(forecastdata.list[23].main.feels_like - 273.15).toFixed(
                      1
                    )}
                    ºC
                  </h3>
                </div>
                <div className="day4 day">
                  {/* //*ponemos la fecha del dia 4 */}
                  <h3 className="foreday">{forecastDate3}</h3>
                  {/* //*ponemos el icono */}
                  <img src={iconUrl3} alt="icono" className="nextimg" />
                  {/* //*pintamos la temperatura */}
                  <h3 className="temp4">
                    {(forecastdata.list[31].main.feels_like - 273.15).toFixed(
                      1
                    )}
                    ºC
                  </h3>
                </div>
                <div className="day5 day">
                  {/* //*ponemos la fecha del dia 5 */}
                  <h3 className="foreday">{forecastDate4}</h3>
                  {/* //*ponemos el icono */}
                  <img src={iconUrl4} alt="icono" className="nextimg" />
                  {/* //*pintamos la temperatura */}
                  <h3 className="temp4">
                    {(forecastdata.list[39].main.feels_like - 273.15).toFixed(
                      1
                    )}
                    ºC
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="extra">
          <div className="contact">
            <h1><a href="http://www.linkedin.com/in/braindeveloper" className="redes" target={"_blank"}><BsLinkedin/></a>Linkedin</h1>
            <h1><a href="https://www.instagram.com/_brianlm_/" className="redes" target={"_blank"}><GrInstagram/></a>Instagram</h1>
            <h1><a href="https://wa.me/+541168846011" className="redes" target={"_blank"}><ImWhatsapp/></a>Whatsapp</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
