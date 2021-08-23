import React from "react"
import {useHistory} from "react-router-dom";
import logo from "../images/logo.png"


function Counselors() {
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
      <title>Counselors</title>
      {/* Start of page content */}
      <div className="page-wrapper dark-white-page">
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
            <div className="col-1 d-lg-block d-none" />
            <div className="col-lg-10 col-12 text-center">
              <h3 className="dark-text mb-3">Our Counselors</h3>
              <p className="dark-text title-desc">Counseling On Demand is focused on providing the absolute best care through experienced counseling professionals.</p>
              <p className="dark-text title-desc">Our therapists are compassionate, understanding and empathetic to your situation.</p>
              <p className="dark-text title-desc">It’s normal to experience anxiety or nervousness when beginning a relationship with a counselor; our introductory session is designed to build rapport and together explore if a continued engagement is the right fit.</p>
              <p className="dark-text title-desc">Our therapists will work with you to develop a positive plan to set goals and make positive changes in your life.</p>
            </div>
            <div className="col-1 d-lg-block d-none" />
          </div>
          {/* Start of Our Counselors */}
          <div className="row our-counselors">
            <div className="col-12">
              <div className="underline-title">
                <h4 className="black-text">Meet Our Counselors</h4>
              </div>
            </div>
            {/* Counselor 1 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Matthew-Hunt-profile-pic-x.jpg" alt="Matthew Hunt" />
                  </div>
                  <h5 className="counselors-name">Matthew Hunt</h5>
                </a>
                <div className="counselors-about">
                  <h6>Lead Online Counselor and Life Coach</h6>
                  <p>My aim is to provide you the “tune up” for when you find yourself feeling a bit unstable or unsupported. Together we can get you back on the road to thinking clearer, feeling better, and enjoying fulfilling relationships with those you care for.</p>
                </div>
              </div>
            </div>
            {/* Counselor 2 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/ANDREA-COD-HEADSHOT2021-225x175.png" alt="Andrea New" />
                  </div>
                  <h5 className="counselors-name">Andrea New</h5>
                </a>
                <div className="counselors-about">
                  <h6>Relationship Development- NLP</h6>
                  <p>My approach is realistic to my client’s needs. My focus is individualized and simple. I teach my clients how to develop the confidence within themselves and their current intimate and professional relationships. My goal is to enhance my client’s strengths and help them succeed. I use a variety of skills to aid in helping my clients gain confidence to tackle past, present and future difficult situations.</p>
                </div>
              </div>
            </div>
            {/* Counselor 3 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/KamalSoloChennai2020png-225x175.png" alt="Kamal Mahalingam" />
                  </div>
                  <h5 className="counselors-name">Kamal Mahalingam</h5>
                </a>
                <div className="counselors-about">
                  <h6>Life Coach</h6>
                  <p>I am a person with empathy. I will always try to listen and understand where you are coming from. I am a strong believer that you can do anything that you can set your mind to.</p>
                </div>
              </div>
            </div>
            {/* Counselor 4 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Sandra-Donaldson-Home-Page-x.jpg" alt="Sandra Donaldson" />
                  </div>
                  <h5 className="counselors-name">Sandra Donaldson</h5>
                </a>
                <div className="counselors-about">
                  <h6>Counselor – MDIV, DMIN</h6>
                  <p>Life presents many challenges and seeking counseling can offer a new perspective about the possibilities of growth and change.</p>
                  <p>I provide quality counseling to individuals, couples, families, teens and clergy.</p>
                </div>
              </div>
            </div>
            {/* Counselor 5 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/john-young-crop-x.jpg" alt="John Young" />
                  </div>
                  <h5 className="counselors-name">John Young</h5>
                </a>
                <div className="counselors-about">
                  <h6>Pastoral Counselor</h6>
                  <p>Fueled by a passion for character building, life coaching and spiritual rejuvenation, John Young merges spirituality with the practicality of everyday life. His candid and revealing approach engages clients and assists them to pursue a life of integrity, success and happiness.</p>
                </div>
              </div>
            </div>
            {/* Counselor 6 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Tony-Trimble-Online-Counselor-225x175.jpg" alt="Tony Trimble" />
                  </div>
                  <h5 className="counselors-name">Tony Trimble</h5>
                </a>
                <div className="counselors-about">
                  <h6>Online Therapist – Ed.D</h6>
                  <p>I am a psychologist and mental health counselor in my 40th year of providing services to clients in need of help. My areas of specialization are addictions, depression, anxiety, and grief.</p>
                </div>
              </div>
            </div>
            {/* Counselor 7 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Tyesh-Harris-Photo1-225x175.png" alt="Tyesh Harris" />
                  </div>
                  <h5 className="counselors-name">Tyesh Harris</h5>
                </a>
                <div className="counselors-about">
                  <h6>Life Coach</h6>
                  <p>On the face of things, you look like you have it all under control but inside you are overwhelmed and trying to pick up the pieces. You are successful but underneath you are burnt out, struggling to see a meaningful path forward. Internally, you know that you cannot continue living your life the way things are.</p>
                  <p>I understand. I have worked with clients to realize new powerful perspectives and I provide the necessary insights and tools to create a sustainable self and path forward. Before I started my business, I was a very successful music and finance executive working with some of the most well known musicians, analysts and firms on the planet.</p>
                </div>
              </div>
            </div>
            {/* Counselor 8 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Rachel-Cooke-Home-x.jpg" alt="Rachel Cooke" />
                  </div>
                  <h5 className="counselors-name">Rachel Cooke</h5>
                </a>
                <div className="counselors-about">
                  <h6>Online Therapist – NCP</h6>
                  <p>I’m an integrative therapist and I see the relationship between you and I as the most important aspect of what we do. I have 5 years of clinical experience in Ireland and the UK helping a variety of people to make their lives more manageable and fulfilling. Whatever is troubling you we can work together to find the right decisions and solutions for you at whatever pace you’re comfortable with.</p>
                </div>
              </div>
            </div>
            {/* Counselor 9 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Sondra-Gentry-Online-Counselor-page.jpg" alt="Sondra Gentry" />
                  </div>
                  <h5 className="counselors-name">Sondra Gentry</h5>
                </a>
                <div className="counselors-about">
                  <h6>Online Therapist -D. Min.</h6>
                  <p>I have 18 years experience working with children, couples, individuals and families. Eight years of experience in group counseling stems from that commitment to helping families. Included among relevant counseling experience is previous employment as a college instructor in the departments of Psychology, Early Childhood Education and Religion.</p>
                </div>
              </div>
            </div>
            {/* Counselor 10 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Jennifer-Uchitel-online-Counselor-225x170.jpg" alt="Jennifer Uchitel" />
                  </div>
                  <h5 className="counselors-name">Jennifer Uchitel</h5>
                </a>
                <div className="counselors-about">
                  <h6>Online Therapist – LMHC</h6>
                  <p>My experience working with individuals and groups, along with your openness and honesty, would be a great platform to start working on your personal goals.</p>
                </div>
              </div>
            </div>
            {/* Counselor 11 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/beverly-x.jpg" alt="Dr. Beverly L. Swanson" />
                  </div>
                  <h5 className="counselors-name">Dr. Beverly L. Swanson</h5>
                </a>
                <div className="counselors-about">
                  <h6>Christian Consultant Visionary Consultant &amp; Life Coach</h6>
                  <p>Have the past few years thrown you in a tailspin? Are you in a transition in your life? Now is the time to Take hold of your life Claim your Destiny and Conquer your Fear! Moving forward from stagnation in ones Spirit~Mind &amp; Body requires a “Lifestyle &amp; Mindset Change.” Change is never easy. This type of change requires Direction, Tools Guidance, and Encouragement.</p>
                </div>
              </div>
            </div>
            {/* Counselor 12 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/adam-parsons-design.png" alt="Adam Parsons" />
                  </div>
                  <h5 className="counselors-name">Adam Parsons</h5>
                </a>
                <div className="counselors-about">
                  <h6>Online Therapist</h6>
                  <p>I work from a client-centered approach with specialization in health condition management, anxiety/depression, ADD/ADHD, pain management, and autism spectrum disorders.</p>
                </div>
              </div>
            </div>
            {/* Counselor 13 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Grant-Long-meet-counselor-225x175.png" alt="Grant Long" />
                  </div>
                  <h5 className="counselors-name">Grant Long</h5>
                </a>
                <div className="counselors-about">
                  <h6>Online Mentor and Basketball coach</h6>
                  <p>My mission is to show you that mental advantage. Talk to me when you are preparing yourself for the game; even the night before.</p>
                </div>
              </div>
            </div>
            {/* Counselor 14 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/meet-counselor-lisa-falls-225x175.jpg" alt="Lisa Falls" />
                  </div>
                  <h5 className="counselors-name">Lisa Falls</h5>
                </a>
                <div className="counselors-about">
                  <h6>MPS, LPCC, ATR-BC</h6>
                  <p>I will help guide you through your difficult time in a private setting with sensitivity and caring.</p>
                </div>
              </div>
            </div>
            {/* Counselor 15 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Amanda-Bryant-Christian-Life-Coach-small.png" alt="Amanda Bryan" />
                  </div>
                  <h5 className="counselors-name">Amanda Bryan</h5>
                </a>
                <div className="counselors-about">
                  <h6>Christian Life Coach</h6>
                  <p>Have you ever put everything you have into something to find out that it is just not going to work? I have, and it is quite disheartening.</p>
                </div>
              </div>
            </div>
            {/* Counselor 16 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/S.Eric-Ward-Wealth-Strategist-225x175.jpg" alt="S.Eric Ward" />
                  </div>
                  <h5 className="counselors-name">S.Eric Ward</h5>
                </a>
                <div className="counselors-about">
                  <h6>Wealth Strategist</h6>
                  <p>I believe that drawing a road map to financial freedom should not be complicated. I partner with my clients to help navigate the often confusing financial world.</p>
                </div>
              </div>
            </div>
            {/* Counselor 17 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/CindyJackson-179x175.jpg" alt="Cindy Jackson" />
                  </div>
                  <h5 className="counselors-name">Cindy Jackson</h5>
                </a>
                <div className="counselors-about">
                  <h6>Career Coach</h6>
                  <p>My Approach – Finding the right job is more than salary and location it is using a strategic matching process to ensure this is the right culture, the right position and the right career trajectory for you now and in the long term.  Let’s talk about your career, your aspirations and your cultural preferences then let’s craft a plan to get things moving in the right direction.</p>
                </div>
              </div>
            </div>
            {/* Counselor 18 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Karen-E.-Sharpe-Coach-Head-Shot-225x175.jpg" alt="Karen E. Sharpe" />
                  </div>
                  <h5 className="counselors-name">Karen E. Sharpe</h5>
                </a>
                <div className="counselors-about">
                  <h6>Certified Life Coach, MS Communications
                    Life Cycle Celebrant</h6>
                  <p>Feeling stuck? Unsure of what’s next? Are you ready for change? Whether personally or professionally, in relationship or single, you have the wisdom inside you to envision how to be better, do better, and feel more fulfilled.</p>
                </div>
              </div>
            </div>
            {/* Counselor 19 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Kelly_Perry3-225x175.jpg" alt="Kelly A. Perry" />
                  </div>
                  <h5 className="counselors-name">Kelly A. Perry</h5>
                </a>
                <div className="counselors-about">
                  <h6>Resiliency Coach</h6>
                  <p>Let’s train your brain. It’s already going negative. How can we add more positive emotions to your life? Bad things are going to happen. How can we change your thinking and take productive action? We will discuss developing a sense of wonder, values, strengths, reframing, balancing your thinking, mindfulness, and more.</p>
                </div>
              </div>
            </div>
            {/* Counselor 20 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Amber_Hannon.jpg" alt="Amber Hannon" />
                  </div>
                  <h5 className="counselors-name">Amber Hannon, MS, RD</h5>
                </a>
                <div className="counselors-about">
                  <h6>Wellness Coach</h6>
                  <p>The ups and downs of life can make maintaining a healthy lifestyle difficult.  In addition, navigating the best approach alone can be confusing and frustrating.  My goal is to empower you to meet your wellness goals, feeling better than ever inside and out.  Whatever your goals may be, I am excited to help you along the way.</p>
                </div>
              </div>
            </div>
            {/* Counselor 21 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/John-Bubello-225x175.jpg" alt="John Bubello" />
                  </div>
                  <h5 className="counselors-name">John Bubello</h5>
                </a>
                <div className="counselors-about">
                  <h6>Certified Life Coach, B.S. Operations Technology
                    Triathlete, Musician</h6>
                  <p>If change were easy, we wouldn’t need resolutions every New Year. The reality is that change is challenging and developing motivation to change alone can be difficult.</p>
                </div>
              </div>
            </div>
            {/* Counselor 22 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Jasminka-Jasarevic-225x175.png" alt="Jasminka Jasarevic" />
                  </div>
                  <h5 className="counselors-name">Jasminka Jasarevic, MS, RD</h5>
                </a>
                <div className="counselors-about">
                  <h6>Life Coach</h6>
                  <p>The first step to any
                    conversation is getting to know you. What seems to bother you? What areas in your
                    life prevail the most? Do you have daily anxieties that seep out on a regular basis?
                    We will take small steps that will be monitored and broken down into chunks.</p>
                </div>
              </div>
            </div>
            {/* Counselor 23 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Julianna-Lopez-225x175.jpg" alt="Julianna Lopez" />
                  </div>
                  <h5 className="counselors-name">Julianna Lopez</h5>
                </a>
                <div className="counselors-about">
                  <h6>Life Coach</h6>
                  <p>My experience has taught me to be an empath and a long with honesty, it’s what I bring to every session.</p>
                </div>
              </div>
            </div>
            {/* Counselor 24 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Madison-Carter-225x175.jpg" alt="Madison Carter" />
                  </div>
                  <h5 className="counselors-name">Madison Carter</h5>
                </a>
                <div className="counselors-about">
                  <h6>Life Coach</h6>
                  <p>Through my experiences, it has taught me to be a helping hand and a listening ear to those seeking help.</p>
                </div>
              </div>
            </div>
            {/* Counselor 25 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Dedric_Wright.png" alt="Dedric Wright" />
                  </div>
                  <h5 className="counselors-name">Dedric Wright</h5>
                </a>
                <div className="counselors-about">
                  <h6>Life Coach</h6>
                  <p>Is your life on autopilot? Has life thrown you a curveball? Are you confused about the next step in your personal or professional life?</p>
                </div>
              </div>
            </div>
            {/* Counselor 26 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="counselors">
                <a href="#" className="counselors-profile">
                  <div className="counselors-image">
                    <img src="./../assets/images/counselors/Missy_O'Dell.jpg" alt="Missy O'Dell" />
                  </div>
                  <h5 className="counselors-name">Missy O'Dell</h5>
                </a>
                <div className="counselors-about">
                  <h6>Faith Based Life Coach</h6>
                  <p>I love to help those who need support. To provide a gentle yet encouraging boost to enable my clients to discover and live a better life.</p>
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
                    <li><a onClick ={() => {history.push("/mobileapp");}}  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontSize:16,fontFamily: 'Roboto'}}>Mobile App</a></li>
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
                    <li><a  onClick ={() => {history.push("/aboutus");}}style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>About Us</a></li>
                    <li><a onClick ={() => {history.push("/howitworks");}} style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>How it Works</a></li>
                    <li><a a href="#"  style={{color:"#C5C5C5",lineHeight:1.5,textDecorationLine:"none",fontFamily: 'Roboto',fontWeight: 400,fontSize:16}}>Counselors</a></li>
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
 
export default Counselors