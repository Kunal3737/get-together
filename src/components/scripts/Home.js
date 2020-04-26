import React from 'react'
import {Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {

    const styleNav = {
        textDecoration : 'none',
        /* textShadow: '2px 2px 4px #000000', */
        fontSize: '50px',
    }

    return (
        <div>
            <Link to="/host" style={styleNav}>
                <div className="homeDiv">Host</div>
            </Link>
            <Link to="/join" style={styleNav}>
                <div className="homeDiv">Join</div>
            </Link>
            <Link to="/schedule" style={styleNav}>
                <div className="homeDiv">Schedule</div>
            </Link>
        </div>
    )
}

export default Home
