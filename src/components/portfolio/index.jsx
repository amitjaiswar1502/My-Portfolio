import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

const projectsData = [
    {
        id: 1,
        name: "Food Order Site",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/khaana.png"),
            link : "https://khaana.amitjaiswar.in/",
        },
        
    },
    {
        id: 2,
        name: "Weather JS App",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/weather.png"),
            link : "https://weather.amitjaiswar.in/"
        },
       
    },
    {
        id: 3,
        name: "News React App",
        tags: ["react-app"],
        media: {
            thumbnail: require("../../images/portfolio/newsApp.png"),
            link : "https://64735f096d456f3a3d11ec5e--splendorous-brioche-0f4e51.netlify.app/"
        },
        
    },
    {
        id: 4,
        name: "Text Manipulation React App",
        tags: ["react-app"],
        media: {
            thumbnail: require("../../images/portfolio/TextManipulation.png"),
            link : "https://64735d1fae27a537e86fe692--luxury-tiramisu-a97abd.netlify.app/"
        },
        
    },
    {
        id: 5,
        name: "MyNoteBook MERN App",
        tags: ["mern-app","react-app"],
        media: {
            thumbnail: require("../../images/portfolio/myNoteBook.png"),
            link : "https://notes.amitjaiswar.in/login"
        },
        
    },
    {
        id: 6,
        name: "Drum-Kit JS App",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/drumKit.png"),
            link : "https://drumkit.amitjaiswar.in/"
        },
     
    },
    {
        id: 7,
        name: "Netflix Clone App with Firebase",
        tags: ["react-app"],
        media: {
            thumbnail: require("../../images/portfolio/netflix.png"),
            link : "https://taupe-trifle-3a950c.netlify.app/"
        },
        
    },
    {
        id: 8,
        name: "Tindog Bootstrap App",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/tindog.png"),
            link :"https://tindog.amitjaiswar.in/",
        },
        
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomOut");


        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomIn");
        }, 200);

        setTimeout(()=>{
            setTransition(false);
        },600)
    };

    return (
        
            <Section
                id="portfolio"
                title="Check my Portfolio"
                background="dark"
            >
                <div className="portfolio-content-wrapper">
                    <Filters filterProjects={(tag) => filterProjects(tag)} />
                    <Showcase
                        data={projects}
                        transition={transition}
                    />
                </div>
            </Section>
      
    );
};

export default Portfolio;
