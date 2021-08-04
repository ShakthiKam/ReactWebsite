import React from 'react';
// import './bootstrap.min.css'
// import './Couple.css' 


class Couple extends React.Component {
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
          <title>Couple</title>
          {/* Start of page content */}
          <div id="individual-page">
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
                </div>
              </div>
            </div>
            {/* End of Return-link */}
            {/* Start of main content */}
            <div className="container main-content">
              <div className="row">
                <div className="col-lg-4 col-md-2 col-sm-1 d-sm-block d-none" />
                <div className="col-lg-4 col-md-8 col-sm-10 individual-content">
                  <div className="hero-text-container">
                    <h1 className="hero-title">Welcome</h1>
                    <p className="hero-text">What are some areas that you and<br></br> your partner want to focus on, or<br></br> get help with?</p>
                  </div>
                  <div className="checkbox-container">
                    <ul className="checkbox-lists">
                      {/* link 1 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Communication</p>
                      </li>
                      {/* link 2 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Money</p>
                      </li>
                      {/* link 3 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Children</p>
                      </li>
                      {/* link 4 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Work</p>
                      </li>
                      {/* link 5 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Intimacy</p>
                      </li>
                      {/* link 6 */}
                      <li className="checkbox-links">
                        <input type="checkbox" className="check-box" />
                        <span className="custom-checkbox" />
                        <p>Something Else</p>
                      </li>
                      {/* End of links*/}
                    </ul>
                    <div className="skip">
                    <p>Skip and <span><a href="./schedule.html">schedule</a></span> your free online consultation.</p></div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-2 col-sm-1 d-sm-block d-none" />
              </div>
              {/* Start of large bottom button */}
              <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-2 col-2" />
                <div className="col-lg-4 col-md-6 col-8">
                  <div className="linear-btn-container">
                    <button type="button" className="linear-btn" onclick="window.location = './about-app.html'">Continue</button>
                  </div>
                </div>
                <div className="col-lg-4 col-md-3 col-2" />
              </div>
              {/* End of large bottom button */}
            </div>
            {/* End of main content */}
          </div>
          {/* End of page content */}
          {/* Bootstrap JS link */}
          {/* FontAwsome JS link */}
        </div>
      );
    }
  };
  export default Couple