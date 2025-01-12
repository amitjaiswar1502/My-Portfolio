import React from "react";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import Navigation from "./navigation-bar";
import IntroContent from "./intro-content";
import "./style.scss";

const Intro = () => {
    return (
        <div className="Intro-section bg-gradient-to-b from-[#3730A3] to-[#312E81]">
            <div
                className="vector-bg"
                id="parallex"
            ></div>
            <img
                className="cloud"
                src={cloud}
                alt="cloud"
            />
            <img
                className="cloud-soft"
                src={cloudSoft}
                alt="cloud-soft"
            />
            <div className="content">
                <Navigation />
                <IntroContent />
            </div>

           
        </div>
    );
};

export default Intro;
