import React from "react";
import { useHistory } from "react-router";
import "./Rider.css";
const Rider = (props) => {
    //   console.log(props);
    const { name, image ,id } = props.rider;
    let history = useHistory();
    const handleRideClick = rideId => {
        const url = `/ride/${rideId}`;
        history.push(url);
    }
    return (
        <div onClick={()=>handleRideClick(id)} className="rider">
            <img src={image} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Rider;

