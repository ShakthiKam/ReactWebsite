import React from 'react'; 
import {useHistory} from "react-router-dom";
import "./Home.css"
import "./Header.css"
import "./Footer.css"
import "./bootstrap.min.css"
import "./Global.css"
import "./Payment.css"


function Payment() {
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
          <title>Confirmation</title>
          {/* Start of page content */}
          <div id="payment-page">
            <div className="progress-bar">
              <div className="progress" />
            </div>
            {/* Star of Return-link */}
            <div className="container">
              <div className="row">
                <div className="col-12 return-link-container">
                  <a className="return-link black-text" href="#" onclick="history.go(-1)">
                    <i className="fas fa-chevron-left" />
                  </a>
                </div>
              </div>
            </div>
            {/* End of Return-link */}
            {/* Start of main content */}
            <div className="container main-content">
              <div className="row">
                <div className="col-12 form-container">
                  <h4 className="text-center black-text">Your payment details</h4>
                  <form action="#" className="form-field">
                    {/* Start of Required */}
                    <div className="inputs-contianer">
                      <p className="form-text">Required:</p>
                      <div className="form-group">
                        <div className="user-name-wrapper">
                          <div className="input-group">
                            <span className="input-group-text"><i className="fal fa-user-circle" /></span>
                            <input type="text" name="first-name" id="first-name" placeholder="First name" required />
                          </div>
                          <div className="input-group">
                            <input type="text" name="last-name" placeholder="Last name" required />
                          </div>
                        </div>
                        <div className="input-group">
                          <span className="input-group-text"><i className="fal fa-envelope-open-text" /></span>
                          <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="user-name-wrapper">
                          <div className="input-group">
                            <span className="input-group-text credit-card"><i className="far fa-credit-card" /></span>
                            <input type="number" name="card-number" id="card-number" placeholder="Card Number" required />
                          </div>
                          <div className="input-group">
                            <input type="number" name="cvv" placeholder="CVV" required />
                          </div>
                        </div>
                        <div className="input-group">
                          <input className="expire-date" type="date" name="expire-date" placeholder="Expiration Date" required />
                        </div>
                      </div>
                    </div>
                    {/* End of Required */}
                    {/* Optional */}
                    <div className="inputs-contianer">
                      <p className="form-text">Optional:</p>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-text"><i className="fal fa-phone-alt phone-icon" /></span>
                          <input type="tel" name="phone-number" placeholder="Telephone" />
                        </div>
                        <div className="textarea-container">
                          <textarea name="message" cols={100} rows={6} placeholder="Your story. 
  What would you like your counselor to know
  for your scheduled consultation?" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    {/* Start of large bottom button */}
                    <div className="row">
                      <div className="col-lg-4 col-md-3 col-sm-2 col-1" />
                      <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                        <div className="linear-btn-container">
                        <button type="button" className="linear-btn blue-btn" onClick ={() => {history.push("/schedule");}} style={{marginLeft:"10px"}}>Pay and Continue</button>
                        

                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3 col-sm-2 col-1" />
                    </div>
                    {/* End of large bottom button */}
                  </form>
                </div>
              </div>
            </div>
            {/* End of main content */}
          </div>
          {/* Start of page content */}
          {/* Bootstrap JS link */}
          {/* FontAwsome JS link */}
        </div>
      );
    }
  export default Payment