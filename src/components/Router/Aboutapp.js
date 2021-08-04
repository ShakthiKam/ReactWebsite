import React from 'react'; 
import './bootstrap.min.css'
import './Aboutapp.css'
import './Module.css'
import './Global.css'
import './Schedule.css'
import client1 from '../images/client1.png'
import client from '../images/client.png'


class Aboutapp extends React.Component {
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
                  <h4 className="sub-title">How it works</h4>
                </div>
              </div>
            </div>
            {/* End of Return-link */}
            {/* Start of main content */}
            <div className="container main-content">
              <div className="row">
                <div className="col-md-4 counseling">
                  <h5 style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:18,marginTop:"30px"}}>Online Counseling</h5>
                  <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>Online counseling usually takes place via a private and secure online video call. You can also choose to meet by phone, or through text messaging.
                  </p>
                </div>
                <div className="col-md-4 counseling"> 
                  <h5 style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:18,marginTop:"30px"}} >Get Well, Stay Well</h5>
                  <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>Work with your counselors, take advantage of different specialist, and use our self care tools in our mobile wellness app, included in all of our subscription plans.
                  </p>
                </div>
                <div className="col-md-4 counseling">
                  <h5 style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:18,marginTop:"30px"}} >Start for Free</h5>
                  <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>Begin with a free session to find the best counselors for you. Then, pay for individual sessions, or sign up for one of our monthly subscription plans.
                  </p>
                </div>
              </div>
              <div className="row clinets-container">
                <div className="col-md-6 clients">
                  <div className="about-client">
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>- Actual testimonial</p>
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>- How the counselor helped</p>
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>- Specific to user selection</p>
                  </div>
                  <div className="client-profile">
                    <div className="img-container">
                      <img className="client1" src={client1} alt="client1" />
                    </div>
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16,
                    marginLeft:"350px",marginTop:"10px"}} >Client</p>
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16,
                    marginLeft:"330px"}}>Testimonial</p>
                  </div>
                </div>
                <div className="col-md-6 clients">
                  <div className="about-client">
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>- Actual testimonial</p>
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>- How the counselor helped</p>
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16}}>- Specific to user selection</p>
                  </div>
                  <div className="client-profile">
                    <div className="img-container">
                      <img className="client" src={client} alt="client" />
                    </div>
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16,
                    marginLeft:"350px",marginTop:"10px"}}>Client</p>
                    <p style={{color:"#fff",fontFamily: 'Roboto',fontWeight: 400,lineHeight: 1.5,fontSize:16,
                    marginLeft:"330px"}}>Testimonial</p>
                  </div>
                </div>
              </div>
              {/* Start of large bottom button */}
              <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-2 col-2" />
                <div className="col-lg-4 col-md-6 col-8">
                  <div className="linear-btn-container">
                    <button type="button" className="linear-btn" onclick="window.location = './schedule.html'" style={{backgroundColor:"#d7e0e9a6",marginLeft:"40px"}}>Continue</button>
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
  }
  export default Aboutapp;