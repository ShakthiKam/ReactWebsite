import React from 'react'; 
import "./Selfcare.css"
import "./Global.css"
import "./bootstrap.min.css"
import "./Mixin.css"
import "./Selfcareactivities.css"
import "./Module.css"
import "./Resources.css"
import logo from "../images/logo.png"
import {useHistory} from "react-router-dom";
// import menubg from "../images/menubg.png"

function Resources() {
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
        <title>Resources</title>
        {/* Start of Page content */}
        <div id="resources-page" className="page-wrapper dark-white-page">
          {/* Star of Header */}
          <header className="header blue-header">
            <div className="container">
              <div className="row">
                <div className="col-12 header-content">
                  <div className="logo-container" style={{marginLeft:"-33px"}}>
                    <a className="logo" href="./../index.html">
                      <span>Wellness</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* End of Header */}
          {/* Start of main content */}
          <div className="container main-content">
            <div className="row">
              <div className="col-12 resource-container">
                <h2 className="text-center" >Emergency Resources</h2>
                <p className="text-center blue-text">Wellness does not offer crisis counseling or emergency services.</p>
                <div className="resource-content">
                  <h4 className="black-text">Medical Emergency:</h4>
                  <p style={{color:"#37383d"}}>Emergency Medical Services — Dial 911</p>
                  <p style={{color:"#37383d"}}>If the situation is potentially life-threatening, get immediate emergency assistance by calling 911, available 24 hours a day.</p>
                </div>
                <div className="resource-content">
                  <h4 className="mb-3">Suicide Prevention:</h4>
                  <p style={{color:"#37383d"}}>If you or someone you know is suicidal or in emotional distress, contact the <span><a href="https://suicidepreventionlifeline.org/" className="underline-link dark-text" target="_blank">National Suicide Prevention Lifeline.</a></span> Trained crisis workers are available to talk 24 hours a day, 7 days a week. Your confidential and toll-free call goes to the nearest crisis center in the Lifeline national network. These centers provide crisis counseling and mental health referrals.</p>
                  <ul className="resource-links-list">
                    <li><p style={{color:"#37383d"}}>The National Suicide Prevention Lifeline can be reached at 1-800-273-8255</p></li>
                    <li><a href="https://suicidepreventionlifeline.org/chat/" className="underline-link dark-text" target="_blank">Live Online Chat</a></li>
                    <li><p style={{color:"#37383d"}}>Nacional de Prevención del Suicidio: 1-888-628-9454</p></li>
                    <li><p style={{color:"#37383d"}}>Deaf or Hard of Hearing: Use your preferred relay service or dial 711 then 1-800-273-8255</p></li>
                  </ul>
                </div>
                <div className="resource-content">
                  <h4>Mental and/or substance use disorders:</h4>
                  <p style={{color:"#37383d"}}>SAMHSA National Helpline: - 1-800-662-HELP (4357) - free, confidential, 24/7, 365-day-a-year treatment referral and information service (in English and Spanish) for individuals and families facing mental and/or substance use disorders.</p>
                </div>
                <div className="resource-content">
                  <h4>The Veterans Crisis:</h4>
                  <p style={{color:"#37383d"}}><span><a href="https://www.veteranscrisisline.net/" className="underline-link dark-text" target="_blank" style={{color:"#37383d"}}>The Veterans Crisis Line</a></span> is a 24-hour, toll-free hotline that provides phone, web-chat, and text options available to military veterans and their families. It provides options for deaf and hard of hearing individuals.</p>
                  <ul className="resource-links-list">
                    <li><p style={{color:"#37383d"}}>The Veterans Crisis Line can be reached at 1-800-273-8255, followed by Pressing 1.</p></li>
                    <li><p style={{color:"#37383d"}}>The hotline can also be reached by texting to 838255.</p></li>
                    <li><a href="https://www.usa.gov/federal-agencies/u-s-department-of-health-and-human-services" className="underline-link dark-text" target="_blank">US Department of Health Information</a></li>
                  </ul>
                </div>
                <div className="resource-content">
                  <h4>IMAlive Crisis Chatline:</h4>
                  <p style={{color:"#37383d"}}><span><a href="https://www.imalive.org/" className="underline-link dark-text" target="_blank">IMAlive Crisis Chatine</a></span> is a non-profit, 24/7, anonymous chatline to help anyone in crisis via instant messaging.</p>
                </div>
                <div className="resource-content">
                  <h4>Crisis Text Line:</h4>
                  <p style={{color:"#37383d"}}><span><a href="https://www.crisistextline.org/" className="underline-link dark-text" target="_blank">The Crisis Text Line</a></span> is a 24/7, nationwide crisis-intervention text-message hotline, which can be reached by texting HOME to 741-741.</p>
                </div>
                <div className="resource-content">
                  <h4>Samaritans USA:</h4>
                  <p style={{color:"#37383d"}}><span><a href="http://www.samaritansusa.org/" className="underline-link dark-text" target="_blank">Samaritans USA</a></span> is a registered charity aimed at providing emotional support to anyone in distress or at risk of suicide throughout the United States.</p>
                </div>
                <div className="resource-content">
                  <h4>The Trevor Project:</h4>
                  <p style={{color:"#37383d"}}><span><a href="https://www.thetrevorproject.org/" className="underline-link dark-text" target="_blank">The Trevor Project</a></span> is a nationwide organization that provides a 24-hour phone hotline, as well as 24-hour web-chat and text options, for lesbian, gay, bisexual, transgender and questioning youth.</p>
                  <ul className="resource-links-list">
                    <li><p style={{color:"#37383d"}}>The TrevorLifeline can be reached at 1-866-488-7386.</p></li>
                    <li><p style={{color:"#37383d"}}>TrevorChat can be found at <span><a href="https://www.thetrevorproject.org/get-help-now/" className="dark-text" target="_blank">https://www.thetrevorproject.org/get-help-now/</a></span></p></li>
                    <li><p style={{color:"#37383d"}}>TrevorText can be reached by texting START to 678-678.</p></li>
                  </ul>
                </div>
                <div className="resource-content">
                  <h4>The Trans Lifeline:</h4>
                  <p style={{color:"#37383d"}}><span><a href="https://translifeline.org/" className="underline-link dark-text" target="_blank">The Trans Lifeline</a></span> is a nonprofit organization that is created by and for the transgender community, providing crisis intervention hotlines, staffed by transgender individuals, available in the United States and Canada.</p>
                  <ul className="resource-links-list">
                    <li><p style={{color:"#37383d"}}>The US Trans Lifeline can be reached at 1-877-565-8860.</p></li>
                    <li><p style={{color:"#37383d"}}>In Canada, call 1-877-330-6366.</p></li>
                  </ul>
                </div>
                <div className="resource-content">
                  <h4>US National Alliance:</h4>
                  <p style={{color:"#37383d"}}>US National Alliance on Mental Illness (NAMI): 1-800-950-NAMI - nationwide network and search function
                    for support and education; <span><a href="https://www.nami.org/Support-Education/NAMI-HelpLine/Top-HelpLine-Resources" className="underline-link dark-text" target="_blank">The Trans Lifeline</a></span></p>
                </div>
                <div className="resource-content">
                  <h4>Additional resources:</h4>
                  <p style={{color:"#37383d"}}>Planned Parenthood: 1-800-230-PLAN</p>
                  <p style={{color:"#37383d"}}>National Domestic Violence Hotline: 1-800-799-SAFE</p>
                  <p style={{color:"#37383d"}}>National Deaf Domestic Violence Video Phone: 1-855-812-1001</p>
                </div>
              </div>
            </div>
          </div>
          {/* End of main content */}
        </div>
          {/* Start of Page content */}
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
                  <ul className="footer-links-list" style={{marginLeft:"-33px",cursor: "pointer"}}>
                  <li><a href="#" onClick ={() => {history.push("/individual");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Individuals</a></li>
                    <li><a href="#" nClick ={() => {history.push("/couple");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Couples</a></li>
                    <li><a href="#" onClick ={() => {history.push("/employers");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Employers</a></li>
                    <li><a href="#" onClick ={() => {history.push("/mobileapp");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Mobile App</a></li>
                    <li><a href="#" onClick ={() => {history.push("/selfcare");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Selfcare</a></li>
                    <li><a href="#" onClick ={() => {history.push("/enrollment");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Member Enrollment</a></li>
                  </ul>
                </div>
                
                {/* Condition links */}
                <div className="col-lg-3 col-md-2 col-sm-3 col-6 links-container">
                  <div className="condition-links">
                    <h5 style= {{lineHeight:2,fontSize: "1.2rem",fontFamily: 'Roboto',marginTop:"-8px",color:"#fff",marginLeft:"-4px"}}>Conditions</ h5>
                    <ul className="footer-links-list" style={{marginLeft:"-35px",cursor: "pointer"}}>
                      <li><a href="#"  onClick ={() => {history.push("/depression");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Feeling Sad </a></li>
                      <li><a href="#" onClick ={() => {history.push("/anxiety");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}} >Anxiety</a></li>
                      <li><a href="#" onClick ={() => {history.push("/panicdisorder");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Panic Attacks</a></li>
                      <li><a href="#" onClick ={() => {history.push("/posttraumatic");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>PTSD</a></li>
                      <li><a href="#" onClick ={() => {history.push("/obsessive");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>OCD</a></li>                      
                      <li><a href="#" onClick ={() => {history.push("/bipolar");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Bipolar</a></li>
                      <li><a href="#" nClick ={() => {history.push("/substanceabuse");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Substance Abuse</a></li>
                      <li><a href="#" onClick ={() => {history.push("/other");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Other</a></li>
                    </ul>
                  </div>
                </div>
                {/* Our Company links */}
             
                <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                  <h5 style= {{lineHeight:2,fontSize: "1.2rem",fontFamily: 'Roboto',marginTop:"-5px",color:"#fff",marginLeft:"-3px"}}>Our Company</h5>
                  <ul className="footer-links-list" style={{marginLeft:"-35px",cursor: "pointer"}}>
                    <li><a href="#" onClick ={() => {history.push("/aboutus");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>About Us</a></li>
                    <li><a href="#" onClick ={() => {history.push("/howitworks");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>How it Works</a></li>
                    <li><a href="#" onClick ={() => {history.push("/counselors");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Counselors</a></li>
                    {/* <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Careers</a></li> */}
                    {/* <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>FAQ</a></li> */}
                    <li><a href="#"  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Privacy/HIPAA</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Terms</a></li>
                  </ul>
                </div>
                {/* Social icons links */}
{/*      

                <div className="social-links">
              <ul className="social-links-list">
                  
              <li className="first"><a href="#">< svg className="facebook-square" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
          <path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
          </a></li>
          
          <li className="second"><a href="#"><svg class="twitter-square" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
          <path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg>
          </a></li>

          
          <li className="third"><a href="#"><svg class="instagram-square" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
          <path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg> 
          </a></li>
        
              </ul>
            </div> */}
 
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
                <p style={{color:"#fff"}}>If you feel you are in crisis, don't use this site. Call 911, or 1.800.273 TALK (8255). <span class="additionl-resource"><a 
                href="#"  class="underline-link" style={{marginLeft:"-13px",fontSize: ".9rem",display:"inline-block",cursor:"pointer"}}>Resources.</a></span></p>

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
  
  export default Resources