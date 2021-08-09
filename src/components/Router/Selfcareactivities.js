import React from 'react'; 
import {useHistory} from "react-router-dom";
import './Selfcare'


function Selfcareactivities() {

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
          <title>Self Care Activities</title>
          {/* Start of page content */}
          <div id="selfcare-activities-page">
            {/* Star of Header */}
            <header className="header blue-header">
              <div className="container">
                <div className="row">
                  <div className="col-12 header-content">
                    <div className="logo" onClick ={() => {history.push("/homefile");}}>
                      <h4>Wellness</h4>
                    </div>
                    <div className="login-container">
                      <div className="counseling">
                        <a className="direct-counseling" onClick ={() => {history.push("/enrollment");}}>Member Enrollment</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* End of Header */}
            {/* Start of main content */}
            <div className="container main-content">
              <div className="row">
                {/* Texts-container */}
                <div className="col-12 text-center">
                  <h2 className="hero-title black-text">Anxiety Self-Care Activities</h2>
                </div>
                <div className="col-lg-3 col-sm-2 d-sm-block d-none" />
                <div className="col-lg-6 col-sm-8 col-xs-12 text-center">
                  <p className="title-desc black-text">Anxiety is a normal part of life, but sometime it can be difficult to manage. Our therapist have put their expertise to work for you in the form of podcasts, articles, and video clips.</p>
                </div>
                <div className="col-lg-3 col-sm-2 d-sm-block d-none" />
              </div>  
              <div className="row">
                {/* Cards Wraper */}
                <div className="col-12 cards-wrapper">
                  <div className="cards-container">
                    {/* Card 1 */}
                    <div className="activity-cards">
                      <div className="card-image">
                        <img src="./../assets/images/anxiety.png" alt="image" />
                      </div>
                      <div className="card-texts">
                        <h6>Matt: coping techniques foranxiety.</h6>
                      </div>
                      <div className="cards-audio">
                        <audio src="./../assets/images/wellness.mp3" controls controlslist="nodownload">
                          Your browser does not support the
                          <code>audio</code> element.
                        </audio>
                      </div>
                    </div>
                    {/* Card 2 */}
                    <div className="activity-cards">
                      <div className="card-image">
                        <video className="img-fluid" src="./../assets/images/wellness.mp4" controls controlslist="nodownload" />
                      </div>
                      <div className="card-texts">
                        <h6>Carlo: the five major types of anxiety disorders.</h6>
                      </div>
                    </div>
                    {/* Card 3 */}
                    <div className="activity-cards">
                      <div className="card-image">
                        <img src="./../assets/images/quite-anxiety.png" alt="image" />
                      </div>
                      <div className="card-texts">
                        <h6>Exercise: practice the counting technique to quite an anxiety attack</h6>
                      </div>
                      <div className="card-links text-center">
                        <a href="#">Try it</a>
                      </div>
                    </div>
                    {/* Card 4 */}
                    <div className="activity-cards">
                      <div className="card-image">
                        <img src="./../assets/images/mood-lifter.png" alt="image" />
                      </div>
                      <div className="card-texts">
                        <h6>Bud: 8 Self-Mood Lifters and 4 Therapies that Work!</h6>
                      </div>
                      <div className="card-links text-center">
                        <a href="#">Read</a>
                      </div>
                    </div>
                    {/* Card 5 */}
                    <div className="activity-cards">
                      <div className="card-image">
                        <img src="./../assets/images/quick-tips.png" alt="image" />
                      </div>
                      <div className="card-texts">
                        <h6>Quick Tips</h6>
                      </div>
                      <div className="card-links text-center">
                        <a href="#">View</a>
                      </div>
                    </div>
                    {/* Card 6 */}
                    <div className="activity-cards">
                      <div className="card-image">
                        <img src="./../assets/images/anxiety.png" alt="image" />
                      </div>
                      <div className="card-texts">
                        <h6>Dharma: how I overcame my social anxiety.</h6>
                      </div>
                      <div className="cards-audio">
                        <audio src="./../assets/images/wellness.mp3" controls controlslist="nodownload">
                          Your browser does not support the
                          <code>audio</code> element.
                        </audio>
                      </div>
                    </div>
                  </div>
                  <div className="link-wrapper text-center">
                    <h5>
                      <span><a href="#">Learn more about Enthrive,</a></span>
                      or <span><a onClick ={() => {history.push("/enrollment");}}>enroll!</a></span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of page content */}
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
                    <li><a onClick ={() => {history.push("/individual");}}>For Individuals</a></li>
                    <li><a onClick ={() => {history.push("/couple");}}>For Couples</a></li>
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
                  <p>If you feel you are in crisis, don't use this site. Call 911, or 1.800.273 TALK (8255). <span className="additionl-resource"><a onClick ={() => {history.push("/resources");}} className="underline-link">Additional resource.</a></span></p>
                  <p>Copyright © <span id="copyright_date">2020</span> Wellness Inc, All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
          {/* Bootstrap JS link */}
          {/* FontAwsome JS link */}
          {/* Custom JS link */}
        </div>
      );
    }
  export default Selfcareactivities