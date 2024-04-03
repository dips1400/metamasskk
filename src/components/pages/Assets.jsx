import React, { useState } from "react";
import "./Assets.css";
import Euro from "../../assets/euro (1).png";
import down from "../../assets/chart-down.png";
import up from "../../assets/trend.png";
import Pound from "../../assets/pound-sign.png";
import Dollar from "../../assets/dollar.png";

const Assets = ({ data }) => {
  if (!data || !data.bpi) {
    return <div>Loading...</div>; 
  }

  const { bpi } = data;

  return (
    <div>
      <div className="container">

        {Object.keys(bpi).map((currency) => (
          <div className="card" key={currency}>
            <div className="card__icon">
              {currency === "EUR" && <img src={Euro} alt="icon.png" />}
              {currency === "GBP" && <img src={Pound} alt="icon.png" />}
              {currency === "USD" && <img src={Dollar} alt="icon.png" />}
              <h6>{bpi[currency].code}</h6>
            </div>
            <h6>{bpi[currency].description}</h6>

            <ul>
              <li>
                <span style={{ marginRight: "1rem", marginTop: "0.6rem" }}>
                  {currency === "EUR" && <img src={up} alt="up" width="25px" height="25px" />}
                  {currency === "GBP" && <img src={down} alt="down" width="25px" height="25px" />}
                  {currency === "USD" && <img src={up} alt="up" width="25px" height="25px" />}
                </span>
                {bpi[currency].rate_float}
              </li>
            </ul>
            <button type="button" style={{width:"80px", height:"28px", background:"#277541", 
            border:"none", color:"white", cursor:"pointer", borderRadius:"0.2rem"}}>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assets;
