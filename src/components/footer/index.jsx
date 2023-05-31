import React from "react";
import Section from "../shared/section";
import Logo from "../../images/Amit.jpg";
import {  FaGithub, FaLinkedin,  } from "react-icons/fa";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper";
import "./style.scss";

const Footer = () => {
    return (
        <>
            <Section
                background="dark"
                className="footer"
            >
                <div className="footer-content-wrapper">
                    <div className="footer-logo">
                        <img
                            src={Logo}
                            alt="S-icons"
                        />
                    </div>
                
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact Me
                    </li>
                </ul>
                <div className="social-icons">
                    {/* <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://youtube.com"
                    /> */}
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaGithub />}
                        link="https://github.com/amitjaiswar1502"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaLinkedin />}
                        link="https://www.linkedin.com/in/amit-jaiswar-a45678102/"
                    />
                    {/* <SocialIcon
                        color="#FF0000"
                        icon={<FaInstagram />}
                        link="https://youtube.com"
                    /> */}
                </div>
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Amit Jaiswar | All right reserved.
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Footer;
