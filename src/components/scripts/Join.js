import React from 'react';
import '../styles/Join.css';

function Join() {
    return (
      <div>
        <form className="joinForm" onSubmit="">
          <label className="labelForJoin" htmlFor="meetingID">
            Meeting ID:{" "}
          </label>
          <input
            className="inputForJoin"
            type="text"
            id="meetingID"
            placeholder="Meeting ID"
          />
          <br />
          <br />
          <label className="labelForJoin" htmlFor="meetingPassword">
            Password: &nbsp; &nbsp;
          </label>
          <input
            className="inputForJoin"
            type="password"
            id="meetingPassword"
            placeholder="Password"
          />
          <br />
          <br />
          <button type="submit" className="joinButton">
            Join
          </button>
        </form>
      </div>
    );
}

export default Join
