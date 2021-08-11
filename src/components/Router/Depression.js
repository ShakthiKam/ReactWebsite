import React from "react"
import {useHistory} from "react-router-dom";


function Depression() {
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
          <title>Depression</title>
          {/* Start of page content */}
          <div id="conditions-page">
            {/* Star of Header */}
            <header className="header">
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
                <div className="col-12">
                  <h4 className="text-center hero-title mb-4">Depression</h4>
                  <p className="title-desc">Depression is defined as a condition where a person experiences discouragement, sadness, hopelessness, and disinterest.</p>
                  <p className="title-desc">A person with depression is unmotivated by life in general. When the feelings are experienced for a short period of time, then depression falls under the “case of the blues.”</p>
                  <p className="title-desc">However, when these feelings are experienced for a longer period of time, for example more than two weeks, and the feelings interfere with normal, daily activities such as taking care of family, going to work or school, and spending time with friends, then the experience is likely a depressive episode.</p>
                  <p className="title-desc">Depression, even major depression, is treatable, because as an illness, it affects the way in which a person feels, behaves, thinks, and functions.</p>
                  <p className="title-desc">All depression and anxiety disorders are not equal. One person’s experience with depression is not the same as another person’s experience with an anxiety disorder.
                  </p>
                  <p className="title-desc">Each person with their respective condition experiences similar symptoms such as nervousness, problems with sleeping and concentrating, and irritability. However, each disorder has its own causes and symptoms.</p>
                </div>
              </div>  
              <div className="row">
                <div className="col-12 pt-4">
                  <h5 className="text-center">Depression Self-Care Activities</h5>
                  <div className="hr-line" />
                  <div className="condition-cards">
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
                        <a className="links" href="#">
                          Try it 
                          <span className="arrow-icon"><i className="far fa-arrow-right" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-2">
                    <a className="title-desc self-care-link" onClick ={() => {history.push("/selfcare");}}>Explore more self-care activities here</a>
                  </div>
                  <div className="hr-line" />
                </div>
              </div>
              {/* Start of large bottom button */}
              <div className="row">
                <div className="col-lg-3 col-md-2 col-sm-1 d-none d-sm-block" />
                <div className="col-lg-6 col-md-8 col-sm-10 col-12">
                  <div className="linear-btn-container condition-btn-lg">
                    <a className="linear-btn condition-link" onClick ={() => {history.push("/schedule");}}>Get help with a free consultation</a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-1 d-none d-sm-block" />
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
                    <li><a onClick ={() => {history.push("/individual");}}>For Individuals</a></li>
                    <li><a onClick ={() => {history.push("/couples");}}>For Couples</a></li>
                    <li><a onClick ={() => {history.push("/employers");}}>For Employers</a></li>
                    <li><a href="#">Mobile App</a></li>
                    <li><a onClick ={() => {history.push("/selfcare");}}>Self-Care</a></li>
                    <li><a onClick ={() => {history.push("/enrollment");}}>Member Enrollment</a></li>
                  </ul>
                </div>
                {/* Condition links */}
                <div className="col-lg-3 col-md-2 col-sm-3 col-6 links-container">
                  <div className="condition-links">
                    <h5>Conditions</h5>
                    <ul className="footer-links-list">
                      <li><a href="#">Feeling Sad</a></li>
                      <li><a href="./anxiety.html">Anxiety</a></li>
                      <li><a href="./panic-disorder.html">Panic Attacks</a></li>
                      <li><a href="./posttraumatic-stress-disorder-ptsd.html">PTSD</a></li>
                      <li><a href="./obsessive-compulsive-disorder-ocd.html">OCD</a></li>
                      <li><a href="./bipolar-disorder.html">Bipolar</a></li>
                      <li><a href="./other-conditions.html">Other</a></li>
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
  export default Depression