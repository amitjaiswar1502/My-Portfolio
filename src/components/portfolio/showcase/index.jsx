import React from "react";
import Arrow from "../../shared/arrow";
import "./style.scss";
// import { Link } from "react-router-dom";

const Showcase = ({ data, transition, link }) => {
    return (
        <div className="project-showcase">
            {data.map((projects) => (
                <div
                    className={`showcase-item ${
                        transition === "zoomOut"
                            ? "zoomOut"
                            : transition === "zoomIn"
                            ? "zoomIn"
                            : ""
                    }`}
                    key={projects.id}
                >
                    <div className="meta-content">
                        <h3>{projects.name}</h3>
                        <div className="go-to-cta">
                            <span
                                className="text"
                                onClick={() => {
                                    window.open(projects.media.link, "_blank");
                                }}
                            >
                                Project Details
                            </span>
                           
                            <Arrow />
                        </div>
                    </div>
                    <img
                        src={projects.media.thumbnail}
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
};

export default Showcase;
