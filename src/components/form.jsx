import { useState } from "react";
import {FaSearch} from "react-icons/fa"

const Form = ({ newLocation}) => {
  const [city, setCity] = useState("");
  const onSumbit = (e) => {
    e.preventDefault();
    if (city === "" || !city) return;
    newLocation(city);
  };
  return (
    <div className="container">
      <form onSubmit={onSumbit} className="form">
        <input
          type="text"
          placeholder="Enter your city"
          onChange={(e) => setCity(e.target.value)}
          className="input"
        />
        <button type="sumbit" className="btn">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Form;
