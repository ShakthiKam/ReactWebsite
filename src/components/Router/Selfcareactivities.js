import React from 'react'; 
import {useHistory} from "react-router-dom";
import './Selfcare'
import logo from "../images/logo.png"
import anxiety from "../images/anxiety.png"
import wellness from "../images/wellness.mp3"
import wellness1 from "../images/wellness.mp4"
import quiteanxiety from "../images/quite-anxiety.png"
import moodlifter from "../images/mood-lifter.png"
import quicktips from "../images/quick-tips.png"


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
        <div className="page-wrapper dark-white-page">
          {/* Star of Header */}
          <header className="header blue-header">
            <div className="container">
              <div className="row">
                <div className="col-12 header-content">
                  <div className="logo-container" style={{marginTop:"-20px",marginLeft:"-39px",cursor:"pointer"}}>
                    <a className="logo" onClick ={() => {history.push("/individual");}}>
                      <span>Wellness</span>
                    </a>
                  </div>
                  <div className="login-container">
                    <div className="counseling">
                      <a className="direct-counseling" href="./../members/enrollment.html">Member Enrollment</a>
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
                <h2 className="hero-title black-text" style={{marginLeft:"10px",fontSize: "3rem",fontWeight: 600,marginTop:"-5px"}}>Anxiety Self-Care Activities</h2>
              </div>
              <div className="col-lg-3 col-sm-2 d-sm-block d-none" />
              <div className="col-lg-6 col-sm-8 col-xs-12 text-center">
                <p className="title-desc black-text">Anxiety is a normal part of life, but sometimes it can be difficult to manage. Our therapists have put their expertise to work for you in the form of podcasts, articles, and video clips.</p>
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
                      <img src={anxiety} alt="image" />
                    </div>
                    <div className="card-texts">
                      <h6>Matt: coping techniques foranxiety.</h6>
                    </div>
                    <div className="cards-audio">
                      <audio src={wellness} controls controlslist="nodownload">
                        Your browser does not support the
                        <code>audio</code> element.
                      </audio>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="activity-cards">
                    <div className="card-image">
                      <video className="img-fluid" src={wellness1} controls controlslist="nodownload" />
                    </div>
                    <div className="card-texts">
                      <h6>Carlo: the five major types of anxiety disorders.</h6>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="activity-cards">
                    <div className="card-image">
                      <img src={quiteanxiety} alt="image" />
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
                  {/* Card 4 */}
                  <div className="activity-cards">
                    <div className="card-image">
                      <img src={moodlifter} alt="image" />
                    </div>
                    <div className="card-texts">
                      <h6>Bud: 8 Self-Mood Lifters and 4 Therapies that Work!</h6>
                    </div>
                    <div className="card-links text-center">
                      <a className="links" href="#">
                        Read
                        <span className="arrow-icon"><i className="far fa-arrow-right" /></span>
                      </a>
                    </div>
                  </div>
                  {/* Card 5 */}
                  <div className="activity-cards">
                    <div className="card-image">
                      <img src={quicktips} alt="image" />
                    </div>
                    <div className="card-texts">
                      <h6>Quick Tips</h6>
                    </div>
                    <div className="card-links text-center">
                      <a className="links" href="#">
                        View
                        <span className="arrow-icon"><i className="far fa-arrow-right" /></span>
                      </a>
                    </div>
                  </div>
                  {/* Card 6 */}
                  <div className="activity-cards">
                    <div className="card-image">
                      <img src={anxiety} alt="image" />
                    </div>
                    <div className="card-texts">
                      <h6>Dharma: how I overcame my social anxiety.</h6>
                    </div>
                    <div className="cards-audio">
                      <audio src={wellness} controls controlslist="nodownload">
                        Your browser does not support the
                        <code>audio</code> element.
                      </audio>
                    </div>
                  </div>
                </div>
                <div className="link-wrapper text-center">
                  <h5>
                  <span><a href="#" style={{display:"inline",fontWeight: 400}}>Learn more about Enthrive,</a></span><p style={{display:"inline", fontSize:"1.2rem", marginLeft:"-15px",fontWeight: 400,color:"#37383D"}}> or<span><a href="#" onClick ={() => {history.push("/selfcare");}}onClick ={() => {history.push("/enrollment");}} style={{display:"inline",marginLeft:"-16px",fontWeight: 400,cursor:"pointer"}}>enroll!</a></span></p> 
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
                <a href="./../index.html"><img className="logo" src={logo} alt="logo" style={{marginLeft:"-12px"}}/></a>
                <p style={{color:"#c5c5c5",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Mental health counseling and life coaching to change your life!</p></div>
                {/* What We offer links */}
                <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                  <h5 style={{lineHeight:2,fontFamily: 'Roboto',fontSize: "1.2rem",marginTop:"-8px",color:"#fff",marginLeft:"-2px"}}>What We Offer</h5>
                  <ul className="footer-links-list" style={{marginLeft:"-33px",cursor: "pointer",marginTop:"-25px"}}>
                  <li><a href="#" onClick ={() => {history.push("/individual");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Individuals</a></li>
                    <li><a href="#" onClick ={() => {history.push("/couple");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Couples</a></li>
                    <li><a href="#" onClick ={() => {history.push("/employers");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Employers</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Mobile App</a></li>
                    <li><a href="#" onClick ={() => {history.push("/selfcare");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Selfcare</a></li>
                    <li><a href="#" onClick ={() => {history.push("/enrollment");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Member Enrollment</a></li>
                  </ul>
                </div>
                
                {/* Condition links */}
                <div className="col-lg-3 col-md-2 col-sm-3 col-6 links-container">
                  <div className="condition-links">
                    <h5 style= {{lineHeight:2,fontSize: "1.2rem",fontFamily: 'Roboto',marginTop:"-8px",color:"#fff",marginLeft:"-4px"}}>Conditions</ h5>
                    <ul className="footer-links-list" style={{marginLeft:"-35px",cursor: "pointer",marginTop:"-25px"}}>
                      <li><a href="#" onClick ={() => {history.push("/depression");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Feeling Sad </a></li>
                      <li><a href="#" onClick ={() => {history.push("/anxiety");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}} >Anxiety</a></li>
                      <li><a href="#" onClick ={() => {history.push("/panicdisorder");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Panic Attacks</a></li>
                      <li><a href="#" onClick ={() => {history.push("/posttraumatic");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>PTSD</a></li>
                      <li><a href="#" onClick ={() => {history.push("/obsessive");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>OCD</a></li>                      
                      <li><a href="#" onClick ={() => {history.push("/bipolar");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Bipolar</a></li>
                      <li><a href="#" onClick ={() => {history.push("/substanceabuse");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Substance Abuse</a></li>
                      <li><a href="#" onClick ={() => {history.push("/other");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Other</a></li>
                    </ul>
                  </div>
                </div>
                {/* Our Company links */}
             
                <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                  <h5 style= {{lineHeight:2,fontSize: "1.2rem",fontFamily: 'Roboto',marginTop:"-5px",color:"#fff",marginLeft:"-3px"}}>Our Company</h5>
                  <ul className="footer-links-list" style={{marginLeft:"-35px",cursor: "pointer",marginTop:"-25px"}}>
                    <li><a href="#" onClick ={() => {history.push("/aboutus");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>About Us</a></li>
                    <li><a href="#" onClick ={() => {history.push("/howitworks");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>How it Works</a></li>
                    <li><a href="#" onClick ={() => {history.push("/counselors");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Counselors</a></li>
                    {/* <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Careers</a></li> */}
                    {/* <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>FAQ</a></li> */}
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Privacy/HIPAA</a></li>
                    <li><a a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Terms</a></li>
                  </ul>
                </div>
 
                {/* Copyrights descriptions */}

                <div className="col-lg-2 col-md-1 col-sm-3 col-6 social-links">
                <ul className="social-links-list">
                  <li><a href="#"><svg class="svg-inline--fa fa-facebook-square fa-w-14" aria-hidden="true" focusable="false" 
                  data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor"
                   d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a></li>
                  <li><a href="#"><svg class="svg-inline--fa fa-twitter-square fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg><i className="fab fa-twitter-square" /></a></li>
                  <li><a href="#"><svg class="svg-inline--fa fa-instagram-square fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg><i className="fab fa-instagram-square" /></a></li>
                </ul>
              </div>
            
                <div className="col-12 copyrights">
                <p style={{color:"#fff"}}>If you feel you are in crisis, don't use this site. Call 911, or 1.800.273 TALK (8255). <span class="additionl-resource"><a href="#"
                onClick ={() => {history.push("/resources");}} class="underline-link" style={{marginLeft:"-13px",fontSize: ".9rem",display:"inline-block",cursor:"pointer"}}>Resources.</a></span></p>

                  <p style={{fontSize: ".9rem",color:"#fff",lineHeight:2}}>Copyright © <span id="copyright_date">2021</span> Wellness Inc, All rights reserved.</p>
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