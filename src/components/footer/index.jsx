import React from "react";
import Section from "../shared/section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper";
import "./style.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Section
                background="dark"
                className="footer"
            >
                <div className="footer-content-wrapper">
                    <div className="flex flex-col justify-center items-center max-w-2xl">
                        <h3 className="text-gray-400 text-3xl inline-flex mb-5">
                            Get In Touch
                        </h3>
                        <p className="text-gray-400 text-lg md:text-xl leading-5 md:leading-7">
                            {`I’m always
                            open to exciting projects, collaboration
                            opportunities, or just a friendly chat about web
                            development. Whether you’re looking for a dedicated
                            developer or have a project in mind, feel free to
                            reach out. Let’s create something amazing!`}
                        </p>
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

                <div className="bottom-bar py-5">
                    <div className="copyright-text text-gray-400">
                        Copyright {currentYear} Amit Jaiswar | All right
                        reserved.
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Footer;
