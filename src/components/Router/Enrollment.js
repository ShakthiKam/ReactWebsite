import React from 'react'; 
import {useHistory} from "react-router-dom";
import './Enrollment.css'
import './Global.css'
import './Header.css'
import './Mixin.css'
import './bootstrap.min.css'
import './Module.css'
import user from '../images/usericon.png'
import logo from'../images/logo.png'
import Matthew from '../images/counselors/Matthew-Hunt-profile-pic-x.png'
import Sandra from '../images/counselors/Sandra-Donaldson-Home-Page-x.jpg'
import John from '../images/counselors/john-young-crop-x.jpg'
import Tony from  '../images/counselors/Tony-Trimble-Online-Counselor-225x175.jpg'
import Tyesh from  '../images/counselors/Tyesh-Harris-Photo1-225x175.png'
import Rachel from '../images/counselors/Rachel-Cooke-Home-x.jpg'
import Sondra from '../images/counselors/Sondra-Gentry-Online-Counselor-page.jpg'
import Jennifer from '../images/counselors/Jennifer-Uchitel-online-Counselor-225x170.jpg'
import Beverly from '../images/counselors/Dr-Beverly-L-Swanson-lg-225x175.jpg'

// import "./Individual.css"



function Enrollment() {


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
                <title>Enrollment</title>
                {/* Start of page content */}
                <div id="enrollment-page" className="page-wrapper dark-white-page">
                  {/* Star of Header */}
                  <header className="header blue-header">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 header-content">
                          <div className="logo-container" style={{marginLeft:"-40px",paddingBottom:"15px",cursor:"pointer"}}>
                            <a className="logo" onClick ={() => {history.push("/homefile");}}>
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
                      <div className="col-12 enrollment-desc">
                        <h2 style={{fontSize: "3rem"}}>Member Enrollment</h2>
                        <p >Enroll and schedule your first online counseling session.</p>
                        <p>Pay monthly to receive regular ongoing counseling.</p>
                        <p>Continue monthly for as long as you need.</p>
                        <div className="hr-line" />
                        <p>$100 per month</p>
                        <p>Includes two counseling sessions per month</p>
                        <p>Additional sessions $45 each</p>
                        <p>Full Wellness App access</p>
                        <p>Includes Online Chat support</p>
                      </div>
                      {/* Start of large bottom button */}
                      <div className="col-lg-4 col-md-3 col-sm-2 col-1" />
                      <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                        <div className="linear-btn-container" style={{cursor:"pointer"}}>
                          <a onClick ={() => {history.push("/payment");}} className="linear-btn yellow-btn">Pay and Enroll</a>
                          {/* <button type="button" class="linear-btn yellow-btn" onclick="window.location = './payment.html'">Pay and Enroll</button> */}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-2 col-1" />
                      {/* End of large bottom button */}
                    </div>
                    {/* Start of Testimonials */}
                    <div className="row testimonial-container">
                      <div className="col-12">
                        <div className="underline-title">
                          <h4 className="black-text" style={{fontSize:"2rem"}}>Hear from people helped by our program</h4>
                        </div>
                      </div>
                      {/* Testimonial content 1 */}
                      <div className="col-md-4 col-sm-12">
                        <div className="testimonial-content">
                          <p style={{fontSize:"1rem",color:"#394D5C"}}>I’ve been to several other counselors before and you have been the first that I’ve connected with that gave me a sense of hope for change. Thank you!</p>
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
                          <p style={{fontSize:"1rem",color:"#394D5C"}}>When I needed that expert “push” you were there to do it. Thank you!</p>
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
                          <p style={{fontSize:"1rem",color:"#394D5C"}}>When I was feeling ‘down and out’ you helped to lift me out of this darkness. The tools that I have gained through counseling with you will stick with me for the rest of my life. Thank you…</p>
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
                    {/* End of Testimonials */}
                    {/* Start of Our Counselors */}
                    <div className="row our-counselors">
                      <div className="col-12">
                        <div className="underline-title">
                          <h4 className="black-text" style={{fontSize:"2rem"}}>Meet Our Counselors</h4>
                        </div>
                      </div>
                      {/* Counselor 1 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={Matthew} alt="Matthew Hunt" />
                            </div>
                            <h5 className="counselors-name">Matthew Hunt</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Lead Online Counselor</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>My aim is to provide you the “tune up” for when you find yourself feeling a bit unstable or unsupported. Together we can get you back on the road to thinking clearer, feeling better, and enjoying fulfilling relationships with those you care for.</p>
                          </div>
                        </div>
                      </div>
                      {/* Counselor 2 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={Sandra} alt="Sandra Donaldson" />
                            </div>
                            <h5 className="counselors-name">Sandra Donaldson</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Counselor – MDIV, DMIN</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>My approach is one of curiosity and hopefully one of compassion. When you come to my office I want to sit with you, mindfully listening to your story, hearing you intentionally with my mind and my heart.</p>
                          </div>
                        </div>
                      </div>
                      {/* Counselor 3 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={John} alt="John Young" />
                            </div>
                            <h5 className="counselors-name">John Young</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Pastoral Counselor</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>Fueled by a passion for character building, life coaching and spiritual rejuvenation, John Young merges spirituality with the practicality of everyday life. His candid and revealing approach engages clients and assists them to pursue a life of integrity, success and happiness.</p>
                          </div>
                        </div>
                      </div>
                      {/* Counselor 4 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={Tony} alt="Tony Trimble" />
                            </div>
                            <h5 className="counselors-name">Tony Trimble</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Online Therapist – Ed.D</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>I am a psychologist and mental health counselor in my 40th year of providing services to clients in need of help. My areas of specialization are addictions, depression, anxiety, and grief.</p>
                          </div>
                        </div>
                      </div>
                      {/* Counselor 5 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={Tyesh} alt="Tyesh Harris" />
                            </div>
                            <h5 className="counselors-name">Tyesh Harris</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Life Coach</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>On the face of things, you look like you have it all under control but inside you are overwhelmed and trying to pick up the pieces. You are successful but underneath you are burnt out, struggling to see a meaningful path forward. Internally, you know that you cannot continue living your life the way things are.</p>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>I understand. I have worked with clients to realize new powerful perspectives and I provide the necessary insights and tools to create a sustainable self and path forward. Before I started my business, I was a very successful music and finance executive working with some of the most well known musicians, analysts and firms on the planet.</p>
                          </div>
                        </div>
                      </div>
                      {/* Counselor 6 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={Rachel} alt="Rachel Cooke" />
                            </div>
                            <h5 className="counselors-name">Rachel Cooke</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Online Therapist – NCP</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>I’m an integrative therapist and I see the relationship between you and I as the most important aspect of what we do. I have 5 years of clinical experience in Ireland and the UK helping a variety of people to make their lives more manageable and fulfilling. Whatever is troubling you we can work together to find the right decisions and solutions for you at whatever pace you’re comfortable with.</p>
                          </div>
                        </div>
                      </div>
                      {/* Counselor 7 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={Sondra} alt="Sondra Gentry" />
                            </div>
                            <h5 className="counselors-name">Sondra Gentry</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Online Therapist -D. Min.</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>I have 18 years experience working with children, couples, individuals and families. Eight years of experience in group counseling stems from that commitment to helping families. Included among relevant counseling experience is previous employment as a college instructor in the departments of Psychology, Early Childhood Education and Religion.</p>
                          </div>
                        </div>
                      </div>
                      {/* Counselor 8 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={Jennifer} alt="Jennifer Uchitel" />
                            </div>
                            <h5 className="counselors-name">Jennifer Uchitel</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Online Therapist – LMHC</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>My experience working with individuals and groups, along with your openness and honesty, would be a great platform to start working on your personal goals.</p>
                          </div>
                        </div>
                      </div>
                      {/* Counselor 9 */}
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="counselors">
                          <a href="#" className="counselors-profile">
                            <div className="counselors-image">
                              <img src={Beverly} alt="Dr. Beverly L. Swanson" />
                            </div>
                            <h5 className="counselors-name">Dr. Beverly L. Swanson</h5>
                          </a>
                          <div className="counselors-about">
                            <h6>Online Counselor – D.D.</h6>
                            <p style={{fontSize:"1rem",color:"#394D5C"}}>I have five years of experience within my field. I am a Vietnam era veteran of the United States Air Force, have worked in the Corporate arena, as a Chief Operations Officer, am well-traveled throughout the US and Europe and am a retired Law Enforcement Agent. I have a Doctorate in Divinity, and I am an ordained minister. I am a mother a grandmother, and I believe I have much I can share with you…all you have to do is have the desire. You are a winner, victorious, prosperous and wonderfully unique, and this year and every year is your year.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of Our Counselors */}
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
                  <ul className="footer-links-list" style={{marginLeft:"-33px",cursor: "pointer"}}>
                  <li><a onClick ={() => {history.push("/individual");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Individuals</a></li>
                    <li><a onClick ={() => {history.push("/couple");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Couples</a></li>
                    <li><a onClick ={() => {history.push("/employers");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Employers</a></li>
                    <li><a onClick ={() => {history.push("/mobileapp");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Mobile App</a></li>
                    <li><a onClick ={() => {history.push("/selfcare");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Selfcare</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Member Enrollment</a></li>
                  </ul>
                </div>
                
                {/* Condition links */}
                <div className="col-lg-3 col-md-2 col-sm-3 col-6 links-container">
                  <div className="condition-links">
                    <h5 style= {{lineHeight:2,fontSize: "1.2rem",fontFamily: 'Roboto',marginTop:"-8px",color:"#fff",marginLeft:"-4px"}}>Conditions</ h5>
                    <ul className="footer-links-list" style={{marginLeft:"-35px",cursor: "pointer"}}>
                      <li><a onClick ={() => {history.push("/depression");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Feeling Sad </a></li>
                      <li><a onClick ={() => {history.push("/anxiety");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}} >Anxiety</a></li>
                      <li><a onClick ={() => {history.push("/panicdisorder");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Panic Attacks</a></li>
                      <li><a onClick ={() => {history.push("/posttraumatic");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>PTSD</a></li>
                      <li><a onClick ={() => {history.push("/obsessive");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>OCD</a></li>                      
                      <li><a onClick ={() => {history.push("/bipolar");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Bipolar</a></li>
                      <li><a a onClick ={() => {history.push("/substanceabuse");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Substance Abuse</a></li>
                      <li><a onClick ={() => {history.push("/other");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Other</a></li>
                    </ul>
                  </div>
                </div>
                {/* Our Company links */}
             
                <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                  <h5 style= {{lineHeight:2,fontSize: "1.2rem",fontFamily: 'Roboto',marginTop:"-5px",color:"#fff",marginLeft:"-3px"}}>Our Company</h5>
                  <ul className="footer-links-list" style={{marginLeft:"-35px",cursor: "pointer"}}>
                    <li><a onClick ={() => {history.push("/aboutus");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>About Us</a></li>
                    <li><a onClick ={() => {history.push("/howitworks");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>How it Works</a></li>
                    <li><a onClick ={() => {history.push("/counselors");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Counselors</a></li>
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
                <p style={{color:"#fff"}}>If you feel you are in crisis, don't use this site. Call 911, or 1.800.273 TALK (8255). <span class="additionl-resource"><a 
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
        export default Enrollment