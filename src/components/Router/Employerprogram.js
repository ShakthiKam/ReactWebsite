import React from 'react';
import {useHistory} from "react-router-dom";
import './bootstrap.min.css'
import './Aboutapp.css'
import './Module.css'
import './Global.css'
import "./Module.css"
import "./Theme.css"
import "./Style.css"
// import './Schedule.css'
import './Employerprogram.css'
import client1 from '../images/client1.png'
import client from '../images/client.png'


function Employerprogram() {

    
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
          <title>How it Works</title>
          {/* Start of page content */}
          <div id="aboutapp-page" className="page-wrapper blue-page">
            <div className="progress-bar">
              <div className="progress" />
            </div>
            {/* Star of Return-link */}
            <div className="container">
              <div className="row">
                <div className="col-12 return-link-container">
                  <a className="return-link white-text" href="#" onclick="history.go(-1)">
                  <svg class="svg-inline--fa fa-chevron-left fa-w-10" style={{marginLeft:"-26px",marginTop:"10px"}} onClick ={() => {history.push("/individual");}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M243.658 43.114C227.69 27.834 202.362 28.365 187.096 44.364L11.098 228.356C-3.699 243.824 -3.699 268.198 11.098 283.666L187.096 467.657C194.955 475.875 205.471 480 216.002 480C225.94 480 235.908 476.313 243.658 468.907C259.611 453.626 260.174 428.315 244.908 412.347L95.363 256.011L244.908 99.674C260.174 83.706 259.611 58.395 243.658 43.114Z"></path></svg>
                    </a>
                  <h4 className="sub-title" style={{marginTop:"10px",color:"#fff",fontSize: "1.8rem"}}>Wellness programs for your employees</h4>
                </div>
              </div>
            </div>
            {/* End of Return-link */}
            {/* Start of main content */}
            <div className="container main-content">
              <div className="row">
                <div className="col-md-4 counseling" style={{marginLeft:"-14px"}}>
                  <h5 style={{fontSize: "1.2rem",fontWeight: 400,color:"#FFFFFF"}} >Online Counseling</h5>
                  <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>Employees enroll and gain immediate access to online mental health counseling, career coaches, life coaches, fitness and diet experts, and spiritual advisors.</p>
                </div>
                <div className="col-md-4 counseling" style={{marginLeft:"-10px"}} >
                  <h5 style={{fontSize: "1.2rem",fontWeight: 400,color:"#FFFFFF"}}>How it Works</h5>
                  <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>Care is coordinated through our wellness app, with access to chat support, self-care activities, scheduling tools, and personalized coaching video messaging.</p>
                </div>
                <div className="col-md-4 counseling" style={{marginLeft:"-10px"}}>
                  <h5 style={{fontSize: "1.2rem",fontWeight: 400,color:"#FFFFFF"}}>Custom Program</h5>
                  <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>Schedule a complimentary consultation with a wellness expert to learn how we can help by creating a program perfectly tailored to meet your needs at a budget you can afford.</p>
                </div>
              </div>
              <div className="row clinets-container">
                <div className="col-md-6 clients">
                  <div className="about-client">
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>- Actual testimonial</p>
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>- How the counselor helped</p>
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>- Specific to user selection</p>
                  </div>
                  <div className="client-profile">
                    <div className="img-container">
                    <img src={client1} alt="client photo" />
                    </div>
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>Client</p>
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>Testimonial</p>
                  </div>
                </div>
                <div className="col-md-6 clients">
                  <div className="about-client">
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>- Actual testimonial</p>
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>- How the counselor helped</p>
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>- Specific to user selection</p>
                  </div>
                  <div className="client-profile">
                    <div className="img-container">
                    <img src={client} alt="client photo" />
                    </div>
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>Client</p>
                    <p style={{fontSize: "1rem",fontWeight: 400,color:"#FFFFFF"}}>Testimonial</p>
                  </div>
                </div>
              </div>
              {/* Start of large bottom button */}
              <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-2 col-2" />
                <div className="col-lg-4 col-md-6 col-8">
                  <div className="linear-btn-container">
                    <a className="linear-btn" onClick ={() => {history.push("/employerschedule");}} style={{cursor:"pointer"}}>Schedule consultation</a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-3 col-2" />
              </div>
              {/* End of large bottom button */}
            </div>
            {/* End of main content */}
          </div>
          {/* Start of page content */}
          {/* Bootstrap JS link */}
          {/* FontAwsome JS link */}
        </div>
    
  );
}
export default Employerprogram