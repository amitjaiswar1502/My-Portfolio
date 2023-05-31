import React from "react";
import { useState } from "react";
import "./style.scss";

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "React Projects",
        id: "react-app",
    },
    {
        name: "HTML/CSS/JS Projects",
        id: "web-app",
    },
    {
        name: "MERN App",
        id: "mern-app",
    },
];

const Filters = ({ filterProjects }) => {
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };

    return (
        <ul className="filters-menu-items">
            {filtersData.map((item) => (
                <li
                    key={item.id}
                    className={`filter-menu-item ${
                        active === item.id ? "active" : ""
                    }`}
                    onClick={() => clickHandler(item.id)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Filters;
