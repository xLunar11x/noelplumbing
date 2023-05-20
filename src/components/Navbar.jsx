import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <header id="navbar">
            <h1>Xpert Sewer and Drain</h1>
            <div id="links">
                <div id="home">
                    <Link className="link" to="/">Home</Link>
                </div>
                <div id="services">
                    <Link className="link" to="/services">Services</Link>
                </div>
                <div id="contact">
                    <Link className="link" to="/contact">Contact</Link>
                </div>
            </div>
        </header>
    )
};

export default Navbar;