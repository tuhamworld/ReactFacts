import React from "react";
import reactLogo from '../assets/react-icon-small.png';

export default function Navbar (props) {
    return (

        <nav className={props.darkMode ? "dark" : ""}>
            <img src={reactLogo} alt="React Logo" width="35px" height="32px" />
            <h3>ReactFacts</h3>
         

            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                
                <div className="toggler--slider"
                onClick={props.toggleDarkMode} 
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>

        </nav>
    )
}