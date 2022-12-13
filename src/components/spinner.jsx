import React from "react";
import "../css/spinner.css";

const Spinner = () => {
  return (
    <div className="conte">
    <div className="lds-ellipsis spi">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Spinner;
