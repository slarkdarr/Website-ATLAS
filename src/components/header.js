import '../styles/header.css'
import React from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";

const styleWhenClicked = {
   textDecoration:'overline'
}

export default function Header (props){
    const location = useLocation();

    return (
        <div className="header">
            <div className="nav-home">
                <Link className="link" to="/">Home</Link>
            </div>
            <nav className="nav-other" >
                <Link className="link nav-shop" 
                style={location.pathname==="/shop"? styleWhenClicked : {}} 
                to="/shop">Shop</Link>

                <Link className="link nav-news" 
                style={location.pathname==="/news"? styleWhenClicked : {}} 
                to="/news">News</Link>

                <Link className="link nav-events" 
                style={location.pathname==="/events"? styleWhenClicked : {}} 
                to="/events">Events</Link>
            </nav>
        </div>
    );
}