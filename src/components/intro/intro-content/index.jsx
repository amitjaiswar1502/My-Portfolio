import hand from "../../../images/hand.png";
import profileImage from "../../../images/image (1).png";
// import { BsAwardFill } from "react-icons/bs";
// import { FaUser } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./style.scss";

const IntroContent = () => {
    return (
        <>
            <div className="intro-content">
                <div className="layout">
                    <div className="left-col">
                        <h1 className="title">
                            <span className="small-text">
                                <span className="text"> Hello </span>
                                <span className="icon">
                                    <img
                                        src={hand}
                                        alt="hand"
                                    />
                                </span>
                                <span className="text">, I Am </span>
                            </span>
                            <span className="big-text">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 40,
                                        strings: [
                                            "Amit Jaiswar",
                                            "Web Developer",
                                            "Tech Enthusiast",
                                        ],
                                    }}
                                />
                            </span>
                        </h1>
                        <p></p>
                    </div>
                    <div className="right-col">
                        <img
                            src={profileImage}
                            alt="profile-poster"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroContent;
