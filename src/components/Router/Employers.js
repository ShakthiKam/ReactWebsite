import React from "react";
import {useHistory} from "react-router-dom";
// import './Individual.css'
import './Global.css'
import './Module.css'
import './Employers.css'

function Employers() {

    
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
          <title>Employers</title>
          {/* Start of page content */}
          <div id="employers-page">
            <div className="progress-bar">
              <div className="progress" />
            </div>
            {/* Star of Return-link */}
            <div className="container">
              <div className="row">
                <div className="col-12 return-link-container">
                  <a className="return-link white-text" href="#" onclick="history.go(-1)">
                  <svg class="svg-inline--fa fa-chevron-left fa-w-10" onClick={() => {history.push("homefile")}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M243.658 43.114C227.69 27.834 202.362 28.365 187.096 44.364L11.098 228.356C-3.699 243.824 -3.699 268.198 11.098 283.666L187.096 467.657C194.955 475.875 205.471 480 216.002 480C225.94 480 235.908 476.313 243.658 468.907C259.611 453.626 260.174 428.315 244.908 412.347L95.363 256.011L244.908 99.674C260.174 83.706 259.611 58.395 243.658 43.114Z"></path></svg>

                  </a>
                </div>
              </div>
            </div>
            {/* End of Return-link */}
            {/* Start of main content */}
            <div className="container main-content">
              <div className="row">
                <div className="col-lg-4 col-md-2 col-sm-1 d-sm-block d-none" />
                <div className="col-lg-4 col-md-8 col-sm-10 individual-content">
                  <div className="hero-text-container" style={{marginLeft:"-400px"}}>
                    <h1 className="hero-title">Welcome</h1>
                    <p className="hero-text">What are some areas that you want<br></br> to help your employees with?</p>
                  </div>
                  <div className="checkbox-container" >
                    <ul className="checkbox-lists" >
                      {/* Link 1 */}
                      <li className="checkbox-links" >
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p style={{color:"#fff"}}>Mental Health</p>
                      </li>
                      {/* Link 2 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p style={{color:"#fff"}}>Motivation</p>
                      </li>
                      {/* Link 3 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p style={{color:"#fff"}}>Career Coaching</p>
                      </li>
                      {/* Link 4 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p style={{color:"#fff"}}>Exercise or Diet</p>
                      </li>
                      {/* Link 5 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p style={{color:"#fff"}}>Diversity Training</p>
                      </li>
                      {/* Link 6 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p style={{color:"#fff"}}>Something Else</p>
                      </li>
                      {/* End of links */}
                    </ul>
                    <p style={{color:"#fff",fontweight:400,fontSize:20,marginLeft:"10px"}}>Skip and <a onClick ={() => {history.push("/employerprogram");}} style={{display:"inline",textDecoration: "underline", fontSize: "1.25rem",cursor:"pointer",marginLeft:"-17px"}}>schedule</a> <p style={{display:"inline", textDecoration:"none",color:"#fff",marginLeft:"-19px",fontSize: "1.25rem"}}>your free online consultation.</p>  </p>                  </div>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-1 d-sm-block d-none" />
              </div>
              {/* Start of large bottom button */}
              <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-2 col-2" />
                <div className="col-lg-4 col-md-6 col-8">
                  <div className="linear-btn-container" style={{height:"5px"}}>
                    <a onClick ={() => {history.push("/employerprogram");}} className="linear-btn" style={{textDecoration:"none",cursor:"pointer",lineHeight: 1.5,height:"38px"}}>Continue</a>
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
  export default Employers