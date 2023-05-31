import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import "./style.scss";


const Arrow = ({icon}) => {
    return (
        <span className="arrowIcon ">
         {icon?<span className="icon">{icon} </span> : <BsArrowRightShort />}   
        </span>
    );
};

export default Arrow;
