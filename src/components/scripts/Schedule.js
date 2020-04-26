import React from "react";
import '../styles/Schedule.css';

function Schedule() {
  return (
    <div>
      <form className="scheduleForm" onSubmit="">
        <label className="labelForSchedule" htmlFor="meetingTitle">
          Meeting Title:{" "}
        </label>
        <input
          className="inputForSchedule"
          type="text"
          id="meetingTitle"
          placeholder="Meeting Title"
        />
        <br />
        <br />
        <label className="labelForSchedule" htmlFor="meetingDate">
          Date:{" "}
        </label>
        <input
          className="inputForSchedule"
          type="date"
          id="meetingDate"
        />
        <br />
        <br />
        <label className="labelForSchedule" htmlFor="timeFrom">
          From: &nbsp;
        </label>
        <input
          className="inputForSchedule"
          type="time"
          id="timeFrom"
        />
        <br />
        <br />
        <label className="labelForSchedule" htmlFor="timeTo">
          To: &nbsp;
        </label>
        <input
          className="inputForSchedule"
          type="time"
          id="timeTo"
        />
        <br />
        <br />
        <label className="labelForSchedule" htmlFor="passwordSchedule">
          Password: &nbsp;
        </label>
        <input
          className="inputForSchedule"
          type="password"
          id="passwordSchedule"
          placeholder="Password"
        />
        <br />
        <br />

        <button type="submit" className="scheduleButton">
          Schedule
        </button>
      </form>
    </div>
  );
}

export default Schedule;
