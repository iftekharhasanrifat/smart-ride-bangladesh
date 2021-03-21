import React, { useEffect, useState } from "react";
import riderData from "../../RiderData/RiderData";
import Rider from "../Rider/Rider";
import "./Home.css";

const Home = () => {
  const [riders, setRiders] = useState([]);
  useEffect(() => {
    setRiders(riderData);
  }, []);
  return (
    <div className="rider-container">
      {riders.map((rider) => (
        <Rider key={rider.id} rider={rider}></Rider>
      ))}
    </div>
  );
};

export default Home;
