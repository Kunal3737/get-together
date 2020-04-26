import React from 'react';
import {Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
    
    const styleNav = {
        color : 'white',
        textDecoration : 'none'
    }

    return (
        <nav>
            <Link to="/" style={styleNav}>
                <h1 className="homeLogo">Get Together</h1>
            </Link>
            <ul className="nav-links">
                <Link to="/signin" style={styleNav}>
                    <li>SIGN IN</li>
                </Link>
                <Link to="/signup" style={styleNav} >
                    <li>SIGN UP</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navigation
