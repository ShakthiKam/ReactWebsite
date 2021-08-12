import React from "react";
import {useHistory} from "react-router-dom";
function Employers() {

    
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
          {/* Custom CSS Link */}
          <link rel="stylesheet" href="./../assets/css/app.css" />
          <title>Employers</title>
          {/* Start of page content */}
          <div id="employers-page">
            <div className="progress-bar">
              <div className="progress" />
            </div>
            {/* Star of Return-link */}
            <div className="container">
              <div className="row">
                <div className="col-12 return-link-container">
                  <a className="return-link white-text" href="#" onclick="history.go(-1)">
                    <i className="fas fa-chevron-left" />
                  </a>
                </div>
              </div>
            </div>
            {/* End of Return-link */}
            {/* Start of main content */}
            <div className="container main-content">
              <div className="row">
                <div className="col-lg-4 col-md-2 col-sm-1 d-sm-block d-none" />
                <div className="col-lg-4 col-md-8 col-sm-10 individual-content">
                  <div className="hero-text-container">
                    <h1 className="hero-title">Welcome</h1>
                    <p className="hero-text">What are some areas that you want to help your employees with?</p>
                  </div>
                  <div className="checkbox-container">
                    <ul className="checkbox-lists">
                      {/* Link 1 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Mental Health</p>
                      </li>
                      {/* Link 2 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Motivation</p>
                      </li>
                      {/* Link 3 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Career Coaching</p>
                      </li>
                      {/* Link 4 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Exercise or Diet</p>
                      </li>
                      {/* Link 5 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Diversity Training</p>
                      </li>
                      {/* Link 6 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Something Else</p>
                      </li>
                      {/* End of links */}
                    </ul>
                    <p>Skip and <span><a onClick ={() => {history.push("/Employerschedule");}}>schedule</a></span> your free online consultation.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-1 d-sm-block d-none" />
              </div>
              {/* Start of large bottom button */}
              <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-2 col-2" />
                <div className="col-lg-4 col-md-6 col-8">
                  <div className="linear-btn-container">
                    <a onClick ={() => {history.push("/employerprogram");}} className="linear-btn">Continue</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-3 col-2" />
              </div>
              {/* End of large bottom button */}
            </div>
            {/* End of main content */}
          </div>
          {/* Start of page content */}
          {/* Bootstrap JS link */}
          {/* FontAwsome JS link */}
        </div>
      );
    }
  export default Employers