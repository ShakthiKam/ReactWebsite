import React from 'react'; 
import {useHistory} from "react-router-dom";
import './Selfcare.css'
import "./Header.css"
import "./Global.css"
import "./Enrollment.css"

function Selfcare() {
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
          <title>Self Care</title>
          {/* Start of page content */}
          <div id="selfcare-page">
            {/* Star of Header */}
            <header className="header blue-header">
              <div className="container">
                <div className="row">
                  <div className="col-12 header-content">
                    <div className="logo-container">
                      <a className="logo" onClick ={() => {history.push("/homefile");}}>
                        <span>Wellness</span>
                      </a>
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
                  <h2 className="hero-title black-text" style={{fontSize: "3rem", fontWeight: 600,marginLeft:"5px"}} >Self-Care Resources</h2>
                </div>
                <div className="col-lg-3 col-sm-2 d-sm-block d-none" />
                <div className="col-lg-6 col-sm-8 col-xs-12 text-center">
                  <p className="title-desc black-text">From our dedicated team of professional
                    therapists, life coaches, diet and fitness
                    experts, and spiritual advisors.</p>
                </div>
                <div className="col-lg-3 col-sm-2 d-sm-block d-none" />
              </div>  
              <div className="row">
                {/* Buttons Wraper */}
                <div className="col-12 selfcare-links-wrapper">
                  {/* Links container 1 */}
                  <ul className="links-container">
                    <li className="links-list">
                      <a className="links"  onClick ={() => {history.push("/selfcareactivities");}}>Feeling Down</a>
                    </li>
                    <li className="links-list">
                      <a className="links" onClick ={() => {history.push("/selfcareactivities");}}>Anxiety</a>
                    </li>
                    <li className="links-list">
                      <a className="links" onClick ={() => {history.push("/selfcareactivities");}}>Motivation</a>
                    </li>
                  </ul>
                  {/* Links container 2 */}
                  <ul className="links-container">
                    <li className="links-list">
                      <a className="links" onClick ={() => {history.push("/selfcareactivities");}}>Sleep</a>
                    </li>
                    <li className="links-list">
                      <a className="links" onClick ={() => {history.push("/selfcareactivities");}}>Fitness</a>
                    </li>
                    <li className="links-list">
                      <a className="links" onClick ={() => {history.push("/selfcareactivities");}}>Diet</a>
                    </li>
                  </ul>
                  {/* Links container 3 */}
                  <ul className="links-container">
                    <li className="links-list">
                      <a className="links" onClick ={() => {history.push("/selfcareactivities");}}>Relationships</a>
                    </li>
                    <li className="links-list">
                      <a className="links" onClick ={() => {history.push("/selfcareactivities");}}>Career</a>
                    </li>
                    <li className="links-list">
                      <a className="links" onClick ={() => {history.push("/selfcareactivities");}}>Mindfullness</a>
                    </li>
                  </ul>
                  <div className="links-container p-0" />
                  <div className="link-wrapper text-center">
                    <h5>
                      <span><a href="#">Learn more about Enthrive,</a></span>
                      or <span><a onClick ={() => {history.push("/enrollment");}}>enroll!</a></span>
                    </h5>
                  </div>
                </div>
              </div>
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
                    <li><a onClick ={() => {history.push("/individual");}}>For Individuals</a></li>
                    <li><a onClick ={() => {history.push("/couple");}}>For Couples</a></li>
                    <li><a href="./../employers/employers.html">For Employers</a></li>
                    <li><a href="#">Mobile App</a></li>
                    <li><a href="#">Self-Care</a></li>
                    <li><a href="./../members/enrollment.html">Member Enrollment</a></li>
                  </ul>
                </div>
                {/* Condition links */}
                <div className="col-lg-3 col-md-2 col-sm-3 col-6 links-container">
                  <div className="condition-links">
                    <h5>Conditions</h5>
                    <ul className="footer-links-list">
                      <li><a href="./../conditions/depression.html">Feeling Sad</a></li>
                      <li><a href="./../conditions/anxiety.html">Anxiety</a></li>
                      <li><a href="./../conditions/panic-disorder.html">Panic Attacks</a></li>
                      <li><a href="./../conditions/posttraumatic-stress-disorder-ptsd.html">PTSD</a></li>
                      <li><a href="./../conditions/obsessive-compulsive-disorder-ocd.html">OCD</a></li>
                      <li><a href="./../conditions/bipolar-disorder.html">Bipolar</a></li>
                      <li><a href="./../conditions/other-conditions.html">Other</a></li>
                    </ul>
                  </div>
                </div>
                {/* Our Company links */}
                <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                  <h5>Our Company</h5>
                  <ul className="footer-links-list">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
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
                  <p>If you feel you are in crisis, don't use this site. Call 911, or 1.800.273 TALK (8255). <span className="additionl-resource"><a onClick ={() => {history.push("/resources");}} className="underline-link">Resources.</a></span></p>
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
  export default Selfcare