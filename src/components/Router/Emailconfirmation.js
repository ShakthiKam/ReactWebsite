import React from 'react'; 
import "./Home.css"
import "./Header.css"
import "./Footer.css"
import "./bootstrap.min.css"
import "./Global.css"
import "./Emailconfirmation.css"



function Emailconfirmation() {

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
                  <title>Confirm</title>
                  {/* Start of page content */}
                  <div id="confirm-page">
                    <div className="progress-bar">
                      <div className="progress enroll-confirmation" />
                    </div>
                    {/* Star of Return-link */}
                    <div className="container">
                      <div className="row">
                        <div className="col-12 return-link-container">
                          <a className="return-link black-text" href="#" onclick="history.go(-1)">
                            <i className="fas fa-chevron-left" />
                          </a>
                          <h4 className="sub-title black-text">Thank You! You are enrolled!</h4>
                        </div>
                      </div>
                    </div>
                    {/* End of Return-link */}
                    {/* Start of main content */}
                    <div className="container main-content">
                      <div className="row">
                        <div className="col-12">
                          <div className="content-container">
                            <div className="texts-wrapper">
                              <p>We have sent you an email with your appointment details.</p>
                              <p>The day before your appointment, we will send you a confirmation message to make sure your schedule has not changed.</p>
                              <p>There will be instructions for how to join your counselor using an online video call.</p>
                            </div>
                            <p className="link-text">Your free online consultation: Monday May 17th 10:30AM <span>&nbsp; &nbsp;<a href="./schedule.html" className="underline-link dark-text">Change</a></span></p>
                          </div>
                        </div>
                      </div>
                      {/* Start of large bottom button */}
                      <div className="row">
                        <div className="col-lg-4 col-md-3 col-sm-2 col-1" />
                        <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                          <div className="linear-btn-container">
                            <button type="button" className="linear-btn blue-btn" onclick="window.location = './self-care.html'">Finished</button>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-2 col-1" />
                      </div>
                      {/* End of large bottom button */}
                    </div>
                    {/* End of main content */}
                  </div>
                  {/* Start of page content */}
                  {/* Start of Footer */}
                  <footer className="footer">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 logo-container">
                          <a href="./../index.html"><img className="logo" src="./../assets/images/wellness-logo.png" alt="Logo" /></a>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus earum possimus.</p>
                        </div>
                        {/* What We offer links */}
                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                          <h5>What We Offer</h5>
                          <ul className="footer-links-list">
                            <li><a href="./individual.html">For Individuals</a></li>
                            <li><a href="./couple.html">For Couples</a></li>
                            <li><a href="#">For Employers</a></li>
                            <li><a href="#">Mobile App</a></li>
                            <li><a href="./enrollment.html">Member Enrollment</a></li>
                          </ul>
                        </div>
                        {/* Condition links */}
                        <div className="col-lg-3 col-md-2 col-sm-3 col-6 links-container">
                          <div className="condition-links">
                            <h5>Conditions</h5>
                            <ul className="footer-links-list">
                              <li><a href="#">Depression</a></li>
                              <li><a href="#">Anxiety</a></li>
                              <li><a href="#">Panic Attacks</a></li>
                              <li><a href="#">PTSD</a></li>
                              <li><a href="#">OCD</a></li>
                              <li><a href="#">Bipolar</a></li>
                              <li><a href="#">Other</a></li>
                            </ul>
                          </div>
                        </div>
                        {/* Our Company links */}
                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                          <h5>Our Company</h5>
                          <ul className="footer-links-list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Counselors</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                          </ul>
                        </div>
                        {/* Social icons links */}
                        <div className="col-lg-2 col-md-1 col-sm-3 col-6 social-links">
                          <ul className="social-links-list">
                            <li><a href="#"><i className="fab fa-facebook-square" /></a></li>
                            <li><a href="#"><i className="fab fa-twitter-square" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram-square" /></a></li>
                          </ul>
                        </div>
                        {/* Copyrights descriptions */}
                        <div className="col-12 copyrights">
                          <p>If you feel you are in crisis, don't use this site. Call 911, or 1.800.273 TALK (8255). <span className="additionl-resource"><a href="./resources.html" className="underline-link">Additional resource.</a></span></p>
                          <p>Copyright © <span id="copyright_date">2020</span> Wellness Inc, All rights reserved.</p>
                        </div>
                      </div>
                    </div>
                  </footer>
                  {/* End of Footer */}
                  {/* Bootstrap JS link */}
                  {/* FontAwsome JS link */}
                </div>
              );
            }
          
  export default Emailconfirmation