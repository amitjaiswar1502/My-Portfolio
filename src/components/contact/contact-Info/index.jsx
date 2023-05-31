import React from "react";

import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";

const ContactInfo = () => {
    return <div className="contact-info-box">
        <h4>
            I would love to have Question for job or freelance.
        </h4>
        <div className="contact-option">
        <FaPhoneAlt/>
        <span className="text">+91 7276783325</span>
        </div>
        <div className="contact-option">
        <AiTwotoneMail/>
        <span className="text">amitjaiswar1502@gmail.com</span>
        </div>
        
    </div>;
};

export default ContactInfo;
