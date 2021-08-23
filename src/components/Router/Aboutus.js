import React from "react"
import {useHistory} from "react-router-dom";
import logo from "../images/logo.png"


function Aboutus() {
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
      <title>About Us</title>
      {/* Start of page content */}
      <div id="about-us-page" className="page-wrapper yellow-page">
        {/* Star of Header */}
        <header className="header blue-header">
          <div className="container">
            <div className="row">
              <div className="col-12 header-content">
                <div className="logo-container">
                  <a href="./../index.html" className="logo">
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
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 about-us-heading">
              <h5>ABOUT US</h5>
              <h1>We’re creating a world where mental health is never an obstacle.</h1>
              <p className="title-desc">We’re reinventing mental health care by coupling data science and virtual delivery to provide immediate, personal support for anyone.</p>
            </div>
            <div className="col-lg-7 col-md-10 col-sm-12">
              <div id="about-us">
                <h4>Enthrive Team</h4>
                <p className="desc-text">Enthrive is an innovative, nonprofit startup focused on improving health more holistically by measuring and enhancing mental, emotional, and spiritual wellness. Our founders are experienced technology innovators and have led corporate teams with a combined 60 years of experience. They have invented new technology combined with “high touch” services to take a more active approach to improve our sense of well-being.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" id="our-team">
              {/* Our Founders */}
              <div className="teams">
                <h3 className="text-center">Our Founders</h3>
                <div className="teams-wrapper">
                  {/* Member 1 */}
                  <div className="teams-member" data-id="Jeff">
                    <div className="member-inmage">
                      <img src="./../assets/images/team/Jeff-ODell.jpg" alt="Jeff O’Dell" />
                    </div>
                    <div className="about-member">
                      <h5>Jeff O’Dell</h5>
                      <p className="m-0">Co-founder</p>
                      <p className="m-0">CEO</p>
                    </div>
                  </div>
                  {/* Team popups 1 */}
                  <div className="member-popups" data-id="Jeff">
                    <div className="popups-container">
                      <button type="button" className="close-members-popup">
                        <i className="far fa-times" />
                      </button>
                      <div className="member-about-container">
                        <div className="text-wrapper">
                          <h4 className="name">Jeff O’Dell</h4>
                          <h5 className="description">Co-founder and CEO of Enthrive</h5>
                          <p className="dark-text">Jeff O’Dell is the co-founder and CEO of Enthrive. He is an experienced corporate executive in large financial services enterprises where he was responsible for strategy, innovation, and data analytics. He has served as the Chief Technology Officer for a Fortune 100 company and is a prominent industry leader, rising to Vice President in four leading companies. He is also a master dream counselor for over 15 years and applies this experience for deeper understanding and emotional wellness. He and his wife have helped thousands of people through prayer ministry and counseling. His family has been connected with international missions in Kenya, China, and North Korea for 25 years.</p>
                        </div>
                        <div className="image-wrapper">
                          <img className="img-fluid" src="./../assets/images/team/Jeff-ODell.jpg" alt="Jeff O’Dell" />
                        </div>
                      </div>
                      <p className="dark-text">He earned his BS in Industrial Engineering from Texas A&amp;M University and completed the Executive Education program at MIT’s Sloan School of Management.</p>
                    </div>
                  </div>
                  {/* Member 2 */}
                  <div className="teams-member" data-id="Kamal">
                    <div className="member-inmage">
                      <img src="./../assets/images/team/Kamal-Mahalingam.jpg" alt="Kamal Mahalingam" />
                    </div>
                    <div className="about-member">
                      <h5>Kamal Mahalingam</h5>
                      <p className="m-0">Co-founder</p>
                      <p className="m-0">President, and CTO</p>
                    </div>
                  </div>
                  {/* Team popups 2 */}
                  <div className="member-popups" data-id="Kamal">
                    <div className="popups-container">
                      <button type="button" className="close-members-popup">
                        <i className="far fa-times" />
                      </button>
                      <div className="member-about-container">
                        <div className="text-wrapper">
                          <h4 className="name">Kamal Mahalingam</h4>
                          <h5 className="description">Co-founder, President, and CTO of Enthrive</h5>
                          <p className="dark-text">
                            Kamal Mahalingam is co-founder, President, and CTO of Enthrive. He is a seasoned executive and product visionary, leading teams who are inherently obsessed with customers. Kamal is a visionary in digital transformation and holds a patent in computer systems. His job is to provide directive leadership and support the organization by sharing vision and goals during the innovation journey. He is a proven entrepreneur with several successful start-ups.</p>
                        </div>
                        <div className="image-wrapper">
                          <img className="img-fluid" src="./../assets/images/team/Kamal-Mahalingam.jpg" alt="Kamal Mahalingam" />
                        </div>
                      </div>
                      <p className="dark-text">He is known for accelerated execution by building high-performance teams that are fueled by a culture of transparency and a sense of ownership.
                      </p>
                      <p className="dark-text">
                        Kamal has a BE in Electrical Engineering from PSG College of Technology and an MS and MBA from Central Connecticut State University. He earned his Professional Certificate in Data Science from Harvard University and is a Certified Life Coach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Our Leaders */}
              <div className="teams">
                <h3 className="text-center">Our Leaders</h3>
                <div className="teams-wrapper">
                  {/* Member 3 */}
                  <div className="teams-member" data-id="Linda">
                    <div className="member-inmage">
                      <img src="./../assets/images/team/Linda-Marr.jpg" alt="Linda Marr" />
                    </div>
                    <div className="about-member">
                      <h5>Linda Marr</h5>
                      <p className="m-0">Head of Development</p>
                    </div>
                  </div>
                  {/* Team popups 3 */}
                  <div className="member-popups" data-id="Linda">
                    <div className="popups-container">
                      <button type="button" className="close-members-popup">
                        <i className="far fa-times" />
                      </button>
                      <div className="member-about-container">
                        <div className="text-wrapper">
                          <h4 className="name">Linda Marr</h4>
                          <h5 className="description">Head of Business Development</h5>
                          <p className="dark-text">inda Marr is head of Business Development. She is a visionary, results-oriented, thought leader with a customer-focused mindset. IT and business professional with a background in Life Insurance. She has broad experience ranging from operational management and business process outsourcing to web-based service platform delivery for customers and producers. Her background in business capability implementation including business process integration, change management, and business data management.
                          </p>
                        </div>
                        <div className="image-wrapper">
                          <img className="img-fluid" src="./../assets/images/team/Linda-Marr.jpg" alt="Linda Marr" />
                        </div>
                      </div>
                      <p className="black-text">Linda is a natural at quickly understanding a business’ needs and tailoring solutions and services to meet and exceed expectations.
                        She has a BS in Business Management and a Management Certification from Villanova University.</p>
                    </div>
                  </div>
                  {/* Member 4 */}
                  <div className="teams-member" data-id="Emily">
                    <div className="member-inmage">
                      <img src="./../assets/images/team/Emily-Bradley.jpg" alt="Emily Bradley" />
                    </div>
                    <div className="about-member">
                      <h5>Emily Bradley</h5>
                      <p className="m-0">Head of User Experience</p>
                    </div>
                  </div>
                  {/* Team popups 4 */}
                  <div className="member-popups" data-id="Emily">
                    <div className="popups-container">
                      <button type="button" className="close-members-popup">
                        <i className="far fa-times" />
                      </button>
                      <div className="member-about-container">
                        <div className="text-wrapper">
                          <h4 className="name">Emily Bradley</h4>
                          <h5 className="description">Head of User Experience</h5>
                          <p className="dark-text">Emily Bradley is the head of User Experience. As an entrepreneur, she has founded Easy Start Homeschool based on her hands-on experience as a mother of 5. She is also the Director of the Classical Conversations program in Washington DC.</p>
                          <p className="dark-text">Her job is to keep us thinking “young” and “relevant” to Gen X and Y users of the Enthrive App.
                          </p>
                        </div>
                        <div className="image-wrapper">
                          <img className="img-fluid" src="./../assets/images/team/Emily-Bradley.jpg" alt="Emily Bradley" />
                        </div>
                      </div>
                      <p className="dark-text">She earned her BA in International Affairs from George Washington University and her JD from American University.</p>
                    </div>
                  </div>
                  {/* Member 5 */}
                  <div className="teams-member" data-id="Melissa">
                    <div className="member-inmage">
                      <img src="./../assets/images/team/Melissa-ODell.jpg" alt="Melissa O’Dell" />
                    </div>
                    <div className="about-member">
                      <h5>Melissa O’Dell</h5>
                      <p className="m-0">Operations Leader</p>
                    </div>
                  </div>
                  {/* Team popups 5 */}
                  <div className="member-popups" data-id="Melissa">
                    <div className="popups-container">
                      <button type="button" className="close-members-popup">
                        <i className="far fa-times" />
                      </button>
                      <div className="member-about-container">
                        <div className="text-wrapper">
                          <h4 className="name">Melissa O’Dell</h4>
                          <h5 className="description">Leads our Business Operations</h5>
                          <p className="dark-text">Melissa O’Dell leads our Business Operations. She organizes our “high touch” teams who provide prayer support and dream counseling. She also runs customer support, business administration, and generally keeps our subscribers happy. Missy is an experienced leader in regional women’s ministry and has organized conferences with hundreds of participants across New England and international speakers.</p>
                          <p className="dark-text">She earned her BA in Education from the University of Texas in San Antonio and her MA in Applied Ministry from Wagner University.</p>
                        </div>
                        <div className="image-wrapper">
                          <img className="img-fluid" src="./../assets/images/team/Melissa-ODell.jpg" alt="Melissa O’Dell" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Our Partners */}
              <div className="teams">
                <h3 className="text-center">Our Partners</h3>
                <div className="teams-wrapper">
                  {/* Member 6 */}
                  <div className="teams-member" data-id="Matthew">
                    <div className="member-inmage">
                      <img src="./../assets/images/team/Matthew-Hunt.jpg" alt="Matthew Hunt" />
                    </div>
                    <div className="about-member">
                      <h5>Matthew Hunt</h5>
                      <p className="m-0">Founder</p>
                      <p className="m-0">CEO</p>
                    </div>
                  </div>
                  {/* Team popups 6 */}
                  <div className="member-popups" data-id="Matthew">
                    <div className="popups-container">
                      <button type="button" className="close-members-popup">
                        <i className="far fa-times" />
                      </button>
                      <div className="member-about-container">
                        <div className="text-wrapper">
                          <h4 className="name">Matthew Hunt</h4>
                          <h5 className="description">Founder and CEO of Counseling on Demand.</h5>
                          <p className="dark-text">Matthew Hunt is the founder and CEO of Counseling on Demand. Counseling On Demand provides Online Counseling via Skype. Counseling On Demand Therapists and Life Coaches are experts in the field of psychotherapy and Life Coaching, utilizing Online Counseling as a private and convenient tool to help their clients in need. At Counseling on Demand, we feel that the quality of the therapist/client interaction is of the utmost value, whichever medium is utilized; thus, Good Online Therapy can be equally or even more effective than traditional office sessions.</p>
                        </div>
                        <div className="image-wrapper">
                          <img className="img-fluid" src="./../assets/images/team/Matthew-Hunt.jpg" alt="Matthew Hunt" />
                        </div>
                      </div>
                      <p className="dark-text">He earned a Master degree in Psychology and Counseling from Michigan State University.</p>
                    </div>
                  </div>
                  {/* Member 7 */}
                  <div className="teams-member" data-id="David">
                    <div className="member-inmage">
                      <img src="./../assets/images/team/David-Hull.jpg" alt="David Hull " />
                    </div>
                    <div className="about-member">
                      <h5>David Hull </h5>
                      <p className="m-0">IT Professional</p>
                    </div>
                  </div>
                  {/* Team popups 7 */}
                  <div className="member-popups" data-id="David">
                    <div className="popups-container">
                      <button type="button" className="close-members-popup">
                        <i className="far fa-times" />
                      </button>
                      <div className="member-about-container">
                        <div className="text-wrapper">
                          <h4 className="name">David Hull</h4>
                          <h5 className="description">IT Professional</h5>
                          <p className="dark-text">David Hull is an IT professional with more than 20 years of industry work experience, performing in a wide range of roles including software developer and test engineer, software designer, solution architect, integration architect, business architect, project manager, vendor manager, sales, and more while specializing in the delivery of innovative model-based solutions, business domain modeling, process modeling, data modeling, and the development of client relationships.</p>
                        </div>
                        <div className="image-wrapper">
                          <img className="img-fluid" src="./../assets/images/team/David-Hull.jpg" alt="David Hull" />
                        </div>
                      </div>
                      <p className="dark-text">He earned his BS in Computer Science from the University of Alaska Fairbanks and continuing education at the University of Washington.</p>
                    </div>
                  </div>
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
                <a href="./../index.html"><img className="logo" src={logo} alt="logo" style={{marginLeft:"-12px"}}/></a>
                <p style={{color:"#c5c5c5",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Mental health counseling and life coaching to change your life!</p></div>
                {/* What We offer links */}
                <div className="col-lg-2 col-md-3 col-sm-3 col-6 links-container">
                  <h5 style={{lineHeight:2,fontFamily: 'Roboto',fontSize: "1.2rem",marginTop:"-8px",color:"#fff",marginLeft:"-2px"}}>What We Offer</h5>
                  <ul className="footer-links-list" style={{marginLeft:"-33px",cursor: "pointer"}}>
                  <li><a onClick ={() => {history.push("/individual");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Individuals</a></li>
                    <li><a onClick ={() => {history.push("/couple");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Couples</a></li>
                    <li><a onClick ={() => {history.push("/employers");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>For Employers</a></li>
                    <li><a href="#" style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Mobile App</a></li>
                    <li><a onClick ={() => {history.push("/selfcare");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Selfcare</a></li>
                    <li><a onClick ={() => {history.push("/enrollment");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Member Enrollment</a></li>
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
                    <li><a href="#"  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>About Us</a></li>
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
 
export default Aboutus