import React from 'react';
import '../styles/Host.css';

function Host() {
    return (
        <div>
            <form className="hostForm" onSubmit="">
                <label className="labelForHost" htmlFor="topic">Meeting Topic: </label>
                <input className="inputForHost" type="text" id="topic" placeholder="Topic" />
                <br/><br/>
                <label className="labelForHost" htmlFor="meetingPassword">Password: &nbsp; &nbsp; &nbsp; &nbsp; </label>
                <input className="inputForHost" type="password" id="meetingPassword" placeholder="Password" />
                <br/><br/>
                <button type="submit" className="hostButton">Host</button>
            </form>
        </div>
    )
}

export default Host
