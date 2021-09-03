import "../styles/footer.css"
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer () {
    const location = useLocation();
    const whenElementClicked = {
        textDecoration: 'underline'
    }

    return (
        <div className="footer">
            <div className="nav-about">
                <Link className="link about-us"
                style={location.pathname==="/about-us"? whenElementClicked : {}}
                to="/about-us">About Us</Link>

                <Link className="link contact-us"
                style={location.pathname==="/contact-us"? whenElementClicked : {}}
                to="/contact-us">Contact Us</Link>
            </div>

            <div className="connect">
                <p className="connect-us">Connect With Us</p>
                <a href="https://www.instagram.com/atletikganesha/" class="fa fa-instagram" target="_blank"></a>
            </div>
        </div>
    )
}
