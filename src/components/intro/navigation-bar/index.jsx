import React, { useState } from "react";
// import logo from "../../../images/Amit.jpg";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import CallToAction from "../../shared/callToAction";
import { scrollToSection } from "../../utils/helper";
import "./style.scss";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };

    return (
        <>
            <div className="top-navigation-bar">
                <div className="app-logo">
                   <h2 className="text-white">DEV</h2>
                </div>
                <div
                    className="mobile-menu"
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    {mobileMenu ? (
                        <IoMdClose
                            size={24}
                            color="#fff"
                        />
                    ) : (
                        <CgMenuRight
                            size={24}
                            color="#fff"
                        />
                    )}
                </div>

                <div className={`navigation  ${mobileMenu ? "active" : ""}`}>
                    <span
                        className="navigation-item"
                        onClick={() => menuItemClickHandler("skills")}
                    >
                        Skills
                    </span>
                    <span
                        className="navigation-item"
                        onClick={() => menuItemClickHandler("portfolio")}
                    >
                        Portfolio
                    </span>
                    {/* <span className="navigation-item" onClick={() => scrollToSection("portfolio")}>Blog & Articles</span> */}
                    <CallToAction
                        text="Contact Me"
                        action={() => menuItemClickHandler("contact")}
                    />
                </div>
            </div>
        </>
    );
};

export default Navigation;
