import React from 'react';
import {useHistory} from "react-router-dom";


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
      <div id="aboutapp-page">
        <div className="progress-bar">
          <div className="progress" />
        </div>
        {/* Star of Return-link */}
        <div className="container">
          <div className="row">
            <div className="col-12 return-link-container">
              <a className="return-link white-text" href="#" onclick="history.go(-1)">
                <i className="fas fa-chevron-left" />
              </a>
              <h4 className="sub-title">Wellness programs for your employees</h4>
            </div>
          </div>
        </div>
        {/* End of Return-link */}
        {/* Start of main content */}
        <div className="container main-content">
          <div className="row">
            <div className="col-md-4 counseling">
              <h5>Online Counseling</h5>
              <p>Employees enroll and gain immediate access to online mental health counseling, career coaches, life coaches, fitness and diet experts, and spiritual advisors.</p>
            </div>
            <div className="col-md-4 counseling">
              <h5>How it Works</h5>
              <p>Care is coordinated through our wellness app, with access to chat support, self-care activities, scheduling tools, and personalized coaching video messaging.</p>
            </div>
            <div className="col-md-4 counseling">
              <h5>Custom Program</h5>
              <p>Schedule a complimentary consultation with a wellness expert to learn how we can help by creating a program perfectly tailored to meet your needs at a budget you can afford.</p>
            </div>
          </div>
          <div className="row clinets-container">
            <div className="col-md-6 clients">
              <div className="about-client">
                <p>- Actual testimonial</p>
                <p>- How the counselor helped</p>
                <p>- Specific to user selection</p>
              </div>
              <div className="client-profile">
                <div className="img-container">
                  <img src="./../assets/images/client-1-img.png" alt="client photo" />
                </div>
                <p>Client</p>
                <p>Testimonial</p>
              </div>
            </div>
            <div className="col-md-6 clients">
              <div className="about-client">
                <p>- Actual testimonial</p>
                <p>- How the counselor helped</p>
                <p>- Specific to user selection</p>
              </div>
              <div className="client-profile">
                <div className="img-container">
                  <img src="./../assets/images/client-img.png" alt="client photo" />
                </div>
                <p>Client</p>
                <p>Testimonial</p>
              </div>
            </div>
          </div>
          {/* Start of large bottom button */}
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-2 col-2" />
            <div className="col-lg-4 col-md-6 col-8">
              <div className="linear-btn-container">
                <a onClick ={() => {history.push("/employerschedule");}} className="linear-btn">Schedule consultation</a>
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