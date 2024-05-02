import React, { useState,useEffect } from "react";
import CodingPlatforms from "./codingPlatforms";
import Contestpage from "./Contestpage";
const Homepage = ({setnumber}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

   

    return (
        <div>
            {/* Navbar */}
           

            {/* Home Section */}
            <section className="home" id="home">
                <h1>it's never too easy but <br /> you have to try</h1>
            </section>
            <CodingPlatforms></CodingPlatforms>
            {/* About Section */}
            <section className="about" id="about">
                <div className="row ">
                    <div className="content">
                        <h3>a word about us</h3>
                        <p>Hackathon Hub provides a centralized platform for discovering and participating in various competitive coding events (hackathons, quizzes, coding contests) and offers a profile system to track progress across platforms like CodeChef, LeetCode.</p>
                        <pre>Benefits:

Increased Visibility: Helps developers discover various competitive coding events and track their progress across platforms.

Centralized Platform: Eliminates the need to visit multiple websites, making event discovery and participation more efficient.

Performance Tracking: Provides a central point to visualize progress and performance across different platforms.

Community Building: Offers a forum for programmers to connect, collaborate, and share knowledge</pre>
                    </div>
                </div>
            </section>
           
           
           
        </div>
    );
};

export default Homepage;
