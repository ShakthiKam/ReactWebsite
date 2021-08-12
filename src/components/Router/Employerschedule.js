import React from 'react';
import {useHistory} from "react-router-dom";


function Employerschedule() {

    
    let history = useHistory();

return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* browser icon */}
      <link rel="shortcut icon" type="image/jpg" href="./../assets/images/wellness-icon.ico" />
      {/* Bootstrap Link */}
      <link rel="stylesheet" href="./../vendors/bootstrap/css/bootstrap.min.css" />
      {/* Calendar links */}
      <link rel="stylesheet" href="./../vendors/calendar/style.css" />
      <link rel="stylesheet" href="./../vendors/calendar/theme.css" />
      {/* Custom CSS Link */}
      <link rel="stylesheet" href="./../assets/css/app.css" />
      <title>Schedule</title>
      {/* Start of page content */}
      <div id="schedule-page">
        <div className="progress-bar">
          <div className="progress" />
        </div>
        {/* Star of Return-link */}
        <div className="container">
          <div className="row">
            <div className="col-12 return-link-container">
              <a className="return-link black-text" href="#" onclick="history.go(-1)">
                <i className="fas fa-chevron-left" />
              </a>
              <h4 className="sub-title black-text">Schedule your consultation</h4>
            </div>
          </div>
        </div>
        {/* End of Return-link */}
        {/* Start of main content */}
        <div className="container main-content">
          <div className="row" id="scheduling-wrapper">
            {/* Start of Calendar */}
            <div className="col-lg-4 col-md-5">
              <div className="calendar-container">
                <div className="calendar-flex">
                  <div className="calendar-wrapper">
                    <div id="calendar" />
                  </div>
                  <div className="btn-wrapper text-center">
                    <button type="button" id="close-calendar" onclick="hideCalendar()">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Start of Calendar */}
            <div className="col-lg-8 col-md-7">
              <div className="pick-date-wrapper">
                <button type="button" id="show-calendar" onclick="showCalendar()">
                  Pick a date 
                  <span className="icon"><i className="fad fa-calendar-alt" /></span>
                </button>
              </div>
              <form action="#" className="availabelity">
                {/* =======Morning====== */}
                <div className="day-time-wrapper">
                  <div className="day-time">
                    <div className="icons-container">
                      <span className="icon"><i className="fal fa-sunrise" /></span>
                    </div>
                    <div className="time-container">
                      <h5 className="black-text">Morning</h5>
                      <p>9:00 AM to 12:00 PM</p>
                    </div>
                  </div>
                  {/* Availablity times */}
                  <div className="availablity-times">
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      9:00 AM
                    </button>
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      10:30 AM
                    </button>
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      11:20 AM
                    </button>
                  </div>
                </div>
                {/* =======Afernoon======= */}
                <div className="day-time-wrapper">
                  <div className="day-time">
                    <div className="icons-container">
                      <span className="icon"><i className="fal fa-sun" /></span>
                    </div>
                    <div className="time-container">
                      <h5 className="black-text">Afternoon</h5>
                      <p>1:00 PM to 4:00 PM</p>
                    </div>
                  </div>
                  {/* Availablity times */}
                  <div className="availablity-times">
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      1:00 PM
                    </button>
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      1:45 PM
                    </button>
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      2:50 PM
                    </button>
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      4:45 PM
                    </button>
                  </div>
                </div>
                {/* ========Evening======= */}
                <div className="day-time-wrapper">
                  <div className="day-time">
                    <div className="icons-container">
                      <span className="icon"><i className="fal fa-sunset" /></span>
                    </div>
                    <div className="time-container">
                      <h5 className="black-text">Evening</h5>
                      <p>5:00 PM to 9:00 PM</p>
                    </div>
                  </div>
                  {/* Availablity times */}
                  <div className="availablity-times">
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      5:00 PM
                    </button>
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      6:30 PM
                    </button>
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      7:10 PM
                    </button>
                    <button type="button" className="availablity-btn">
                      <span><i className="fal fa-clock" /></span>
                      8:20 PM
                    </button>
                  </div>
                </div>
                <div className="text-center shedule-bnt-wrapper">
                  <button type="button" id="schedule-appointment" onClick ={() => {history.push("/emailconfirmation");}}>Schedule appointment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End of main content */}
      </div>
      {/* Start of page content */}
      {/* jQuery link */}
      {/* Bootstrap JS link */}
      {/* FontAwsome JS link */}
      {/* Calendar link */}
      {/* Custom JS link */}
    </div>
  );
}
export default Employerschedule
