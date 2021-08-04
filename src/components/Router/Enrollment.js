import React from 'react'; 
import './Enrollment.css'
import './Global.css'
import './Header.css'
import './Mixin.css'
// import './Footer.css'
import './bootstrap.min.css'
import user from '../images/user.png'
import logo from'../images/logo.png'



class Enrollment extends React.Component {
    render(){
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
          <title>Enrollment</title>
          {/* Start of page content */}
          <div id="enrollment-page">
            {/* Star of Header */}
            <header className="header blue-header">
              <div className="container">
                <div className="row">
                  <div className="col-12 header-content">
                    <div className="logo">
                      <h4 style={{color:"white", fontSize:35,fontFamily: 'Roboto'}}>Wellness</h4>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* End of Header */}
            {/* Start of main content */}
            <div className="container main-content">
              <div className="row">
                <div className="col-12 enrollment-desc">
                  <h2 style={{fontSize:45,marginTop:"40px"}}>Memeber Enrollment</h2>
                  <p style={{color:"black",fontWeight:500,fontFamily: 'Roboto'}}>Enroll and schedule your first online counseling session.</p>
                  <p style={{color:"black",fontWeight:500,fontFamily: 'Roboto'}}>Pay monthly to receive regular ongoing counseling.</p>
                  <p style={{color:"black",fontWeight:500,fontFamily: 'Roboto'}}>Continue monthly for as long as you need.</p>
                  <div className="hr-line" />
                  <p style={{color:"black",fontWeight:500,fontFamily: 'Roboto'}}>$100 per month</p>
                  <p style={{color:"black",fontWeight:500,fontFamily: 'Roboto'}}>Includes two counseling sessions per month</p>
                  <p style={{color:"black",fontWeight:500,fontFamily: 'Roboto'}}>Additional sessions $45 each</p>
                  <p style={{color:"black",fontWeight:500,fontFamily: 'Roboto'}}>Full Wellness App access</p>
                  <p style={{color:"black",fontWeight:500,fontFamily: 'Roboto'}}>Includes Online Chat support</p>
                </div>
                {/* Start of large bottom button */}
                <div className="col-lg-4 col-md-3 col-sm-2 col-1" />
                <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                  <div className="linear-btn-container">
                    <button type="button" className="linear-btn yellow-btn" onclick="window.location = './payment.html'" style={{backgroundColor:"#fcea93", marginLeft:"10px"}}>Pay and Enroll</button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-2 col-1" />
                {/* End of large bottom button */}
              </div>
              <div className="row testimonial-container">
                <div className="col-12">
                  <div className="testimonials">
                    <h4 className="black-text" style={{fontSize:30}}>Here are a few testimonials</h4>
                  </div>
                </div>
                {/* Testimonial content 1 */}
                <div className="col-md-4 col-sm-12">
                  <div className="testimonial-content">
                    <p style={{color:"black",fontSize:16,fontWeight:400,fontFamily: 'Roboto'}}>I’ve been to several other counselors before and you have been the first that I’ve connected with that gave me a sense of hope for change. Thank you!</p>
                  </div>
                  <div className="testimonial-user">
                    <div className="user-image">
                    <img className="img-fluid" src={user} alt="image" />
                    </div>
                    <div className="user-name">
                      <h6>JL</h6>
                    </div>
                  </div>
                </div>
                {/* Testimonial content 2 */}
                <div className="col-md-4 col-sm-12">
                  <div className="testimonial-content">
                    <p style={{color:"black",fontSize:16,fontWeight:400,fontFamily: 'Roboto'}}>When I needed that expert “push” you were there to do it. Thank you!</p>
                  </div>
                  <div className="testimonial-user">
                    <div className="user-image">
                    <img className="img-fluid" src={user} alt="image" />
                    </div>
                    <div className="user-name">
                      <h6>SM</h6>
                    </div>
                  </div>
                </div>
                {/* Testimonial content 3 */}
                <div className="col-md-4 col-sm-12">
                  <div className="testimonial-content">
                    <p style={{color:"black",fontSize:16,fontWeight:400,fontFamily: 'Roboto'}}>When I was feeling ‘down and out’ you helped to lift me out of this darkness. The tools that I have gained through counseling with you will stick with me for the rest of my life. Thank you…</p>
                  </div>
                  <div className="testimonial-user">
                    <div className="user-image">
                    <img className="img-fluid" src={user} alt="image" />
                    </div>
                    <div className="user-name">
                      <h6>TW</h6>
                    </div>
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
                  <a href="./../index.html"><img className="logo" src={logo} alt="logo"/></a>
                  <p style={{color:"#c5c5c5",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus earum possimus.</p>
                </div>
                {/* What We offer links */}
                <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                  <h5 style={{lineHeight:2,fontSize:16,fontFamily: 'Roboto'}}>What We Offer</h5>
                  <ul className="footer-links-list" style={{marginLeft:"-16px",}}>
                    <li><a href="./individual.html" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Individuals</a></li>
                    <li><a href="./couple.html" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Couples</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Employers</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Mobile App</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Member Enrollment</a></li>
                  </ul>
                </div>
                
                {/* Condition links */}
                <div className="col-lg-3 col-md-2 col-sm-3 col-6 links-container">
                  <div className="condition-links">
                    <h5 style={{lineHeight:2,fontSize:16,fontFamily: 'Roboto'}} >Conditions</h5>
                    <ul className="footer-links-list"style={{marginLeft:"-17px"}}>
                      <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Depression</a></li>
                      <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Anxiety</a></li>
                      <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Panic Attacks</a></li>
                      <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>PTSD</a></li>
                      <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>OCD</a></li>
                      <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Bipolar</a></li>
                      <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Other</a></li>
                    </ul>
                  </div>
                </div>
                {/* Our Company links */}
                <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                  <h5 style={{lineHeight:2,fontSize:16,fontFamily: 'Roboto'}}>Our Company</h5>
                  <ul className="footer-links-list" style={{marginLeft:"-18px",color:"#C5C5C5"  }}>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>About Us</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Blog</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Counselors</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Careers</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>FAQ</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Privacy</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:2,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Terms</a></li>
                  </ul>
                </div>
                <div className="cell" style={{border:'0.5px solid',borderColor:"#c5c5c5", width: "1200px",display: 'flex', 
            alignItems: 'center', justifyContent: 'center', marginLeft:"10px",}}></div>
                {/* Social icons links */}
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
            </div>
 
                {/* Copyrights descriptions */}
                <div className="col-12 copyrights">
                  <p style={{marginTop:-120,fontFamily: 'Roboto',fontWeight: 400,fontSize:16,color:"white"}}>If you feel you are in crisis, don't use this site. Call 911, or 1.800.273 TALK (8255). <span className="additionl-resource"><a href="./resources.html" className="underline-link" style={{fontFamily: 'Roboto',fontWeight: 400,fontSize:16,color:"white"}}>Additional resource.</a></span></p>
                  <p style={{fontFamily: 'Roboto',fontWeight: 400,fontSize:16,color:"white"}}>Copyright © <span id="copyright_date">2020</span> Wellness Inc, All rights reserved.</p>
                  
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
  }
  export default Enrollment