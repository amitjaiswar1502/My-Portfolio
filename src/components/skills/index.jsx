import React from "react";
import Section from "../shared/section";
import react from "../../../src/images/react.svg";
import bootstrap from "../../../src/images/Bootstrap.svg";
import css3 from "../../../src/images/css3.svg";
import javascript from "../../../src/images/javascript.svg";
import mongodb from "../../../src/images/mongodb.svg";
import sass from "../../../src/images/sass.svg";
import nodejs from "../../../src/images/nodejs-1.svg";
import CallToAction from "../shared/callToAction";
// import resume from "../../style-config/Resume.pdf";
import { BsArrowDownShort } from "react-icons/bs";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        className="skill-img"
                        src={react}
                        alt="react"
                    />
                    <img
                        className="skill-img"
                        src={bootstrap}
                        alt="bootstrap"
                    />
                    <img
                        className="skill-img"
                        src={css3}
                        alt="css3"
                    />
                    <img
                        className="skill-img"
                        src={javascript}
                        alt="javascript"
                    />
                    <img
                        className="skill-img"
                        src={mongodb}
                        alt="mongodb"
                    />
                    <img
                        className="skill-img"
                        src={nodejs}
                        alt="nodejs"
                    />
                    <img
                        className="skill-img"
                        src={sass}
                        alt="sass"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Hey, check my key Skills, I love to develop Web Apps.
                        <br />
                        I strongly believe ⤵︎ <br />
                        <em>
                            "Learning is just a begining, It begins but never
                            ends".
                        </em>
                    </p>

                    <CallToAction
                        text="Download CV"
                        action={()=>  window.open("https://amitjaiswar.com/Resume.pdf")}
                        icon={<BsArrowDownShort />}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
