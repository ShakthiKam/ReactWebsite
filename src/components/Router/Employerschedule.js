import React, { useState, useEffect }  from 'react'; 
import {useHistory} from "react-router-dom";
import "./bootstrap.min.css"
import "./Global.css"
import "./Schedule.css"
import "./Module.css"
import "./Theme.css"
import "./Style.css"
import "./Confirm.css"
import "./Emailconfirmation.css"
import "./Selfcare.css"


function Employerschedule() {

   

    let history = useHistory(); 
    console.log(history, "ddddd")
    useEffect(() => 
    {
      var script = document.createElement("script");
      script.src = "jquery.min.js";
      script.async = false;
      //script.setAttribute("type","text/javascript");
  
      //script.setAttribute("src", "jquery.min.js");
      //document.getElementsByTagName("head")[0].appendChild(script);
  
      //script.onload = () =>window.A.sort();
      document.body.appendChild(script);
      
      
      script = document.createElement("script");
      script.src = "Calendar.js";
      script.async = false;
  
      //script.onload = () =>window.A.sort();
      //script.setAttribute("type","text/javascript");
  
      //script.setAttribute("src", "Calendar.js");
      //document.getElementsByTagName("head")[0].appendChild(script);
  
      document.body.appendChild(script);
      
      
    script = document.createElement("script");
      script.src = "Schedule.min.js";
      script.async = false;
  
      //script.setAttribute("type","text/javascript");
  
      //script.setAttribute("src", "Schedule.js");
      //document.getElementsByTagName("head")[0].appendChild(script);
  
      //script.onload = () =>window.A.sort();
      document.body.appendChild(script);
  
      return () => {
        //document.body.removeChild(script);
      }
    }, []);
    return (
      
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* browser icon */}
        <link rel="shortcut icon" type="image/jpg" href="./../assets/images/wellness-icon.ico" />
        {/* Bootstrap Link */}
        <link rel="stylesheet" href="./../vendors/bootstrap/css/bootstrap.min.css" />
        {/* Calendar links */}
        <link rel="stylesheet" href="./../vendors/calendar/style.css" />
        <link rel="stylesheet" href="./../vendors/calendar/theme.css" />
        {/* Custom CSS Link */}
        <link rel="stylesheet" href="./../assets/css/app.css" />
        <title>Schedule</title>
        {/* Start of page content */}
        <div id="schedule-page" className="page-wrapper dark-white-page" style={{background:"#f3f3f3"}}>
          <div className="progress-bar">
            <div className="progress" />
          </div>
          {/* Star of Return-link */}
          <div className="container">
            <div className="row">
              <div className="col-12 return-link-container">
                <a className="return-link black-text" href="#" onclick="history.go(-1)">
                <svg class="svg-inline--fa fa-chevron-left fa-w-10" onClick ={() => {history.goBack()}}aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M243.658 43.114C227.69 27.834 202.362 28.365 187.096 44.364L11.098 228.356C-3.699 243.824 -3.699 268.198 11.098 283.666L187.096 467.657C194.955 475.875 205.471 480 216.002 480C225.94 480 235.908 476.313 243.658 468.907C259.611 453.626 260.174 428.315 244.908 412.347L95.363 256.011L244.908 99.674C260.174 83.706 259.611 58.395 243.658 43.114Z"></path></svg>
                </a>
                <h4 className="sub-title black-text" style={{fontSize: "2rem"}}>
Schedule your consultation</h4>
              </div>
            </div>
          </div>
          {/* End of Return-link */}
          {/* Start of main content */}
          <div className="container main-content">
            <div className="row" id="scheduling-wrapper">
              {/* Start of Calendar */}
              <div className="col-lg-4 col-md-5">
                <div className="calendar-container" style={{display:"block"}}>
                  <div className="calendar-flex" >
                    <div className="calendar-wrapper">
                      <div id="calendar" />
                    </div>
                    <div className="btn-wrapper text-center">
                      <button type="button" id="close-calendar" onclick="hideCalendar()">Close</button>
                    </div>
                  </div>
                </div>
            </div>
            {/* Start of Calendar */}
              <div className="col-lg-8 col-md-7">
                <div className="pick-date-wrapper">
                  <button type="button" id="show-calendar" onclick="showCalendar()">
                    Pick a date 
                    <span className="icon"><svg class="svg-inline--fa fa-calendar-days fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="calendar-days" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM128 432C128 440.836 120.838 448 112 448H80C71.164 448 64 440.836 64 432V400C64 391.164 71.164 384 80 384H112C120.838 384 128 391.164 128 400V432ZM128 304C128 312.836 120.838 320 112 320H80C71.164 320 64 312.836 64 304V272C64 263.164 71.164 256 80 256H112C120.838 256 128 263.164 128 272V304ZM256 432C256 440.836 248.838 448 240 448H208C199.164 448 192 440.836 192 432V400C192 391.164 199.164 384 208 384H240C248.838 384 256 391.164 256 400V432ZM256 304C256 312.836 248.838 320 240 320H208C199.164 320 192 312.836 192 304V272C192 263.164 199.164 256 208 256H240C248.838 256 256 263.164 256 272V304ZM384 432C384 440.836 376.838 448 368 448H336C327.164 448 320 440.836 320 432V400C320 391.164 327.164 384 336 384H368C376.838 384 384 391.164 384 400V432ZM384 304C384 312.836 376.838 320 368 320H336C327.164 320 320 312.836 320 304V272C320 263.164 327.164 256 336 256H368C376.838 256 384 263.164 384 272V304Z"></path><path class="fa-primary" fill="currentColor" d="M400 64H352V32C352 14.327 337.673 0 320 0H320C302.327 0 288 14.327 288 32V64H160V32C160 14.327 145.673 0 128 0H128C110.327 0 96 14.327 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64Z"></path></g></svg></span>
                  </button>
                </div>
                <form action="#" className="availabelity">
                  {/* =======Morning====== */}
                  <div className="day-time-wrapper">
                    <div className="day-time">
                      <div className="icons-container">
                        <span className="icon"><svg class="svg-inline--fa fa-sunrise fa-w-18" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sunrise" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M287.75 352.25C239.037 352.25 197.824 383.605 182.539 427.105C181.006 431.471 180.977 448.1 197.592 448.1C204.363 448.1 210.094 443.744 212.32 437.453C223.289 406.439 252.988 384.199 287.75 384.199C322.629 384.199 352.24 406.443 363.277 437.463C365.436 443.523 370.889 448.1 378.344 448.1C389.27 448.1 396.68 437.336 393.082 427.1C377.795 383.602 336.568 352.25 287.75 352.25ZM91 440.959C93.967 445.418 98.973 448.1 104.336 448.1C117.123 448.1 124.75 433.871 117.656 423.248L90.25 382.203L176.25 364.979C182.625 363.73 187.625 358.863 188.875 352.498L206.125 266.633L279.125 315.182C284.5 318.801 291.5 318.801 296.875 315.182L369.875 266.633L387.125 352.498C388.25 358.738 393.25 363.73 399.75 364.979L485.75 382.203L458.355 423.23C451.258 433.861 458.889 448.1 471.686 448.1C477.037 448.1 482.035 445.432 485.008 440.988L525.75 380.08C528.75 375.713 529.25 369.971 527.25 365.104S520.75 356.617 515.5 355.494L416.5 335.775L396.75 236.93C395.75 231.688 392.125 227.318 387.125 225.197C382.125 223.201 376.5 223.699 372.125 226.695L288.125 282.607L204.125 226.695C199.75 223.824 194 223.201 189.125 225.197C184.25 227.195 180.625 231.688 179.5 236.93L159.75 335.775L60.75 355.494C55.5 356.492 51.125 360.111 49 365.104S47.5 375.713 50.5 380.08L91 440.959ZM560 480.049H16C7.199 480.049 0 487.238 0 496.025C0 504.811 7.199 512 16 512H560C568.801 512 576 504.811 576 496.025C576 487.238 568.801 480.049 560 480.049ZM203.312 123.312L272 54.625V208C272 216.844 279.156 224 288 224S304 216.844 304 208V54.625L372.688 123.312C375.812 126.438 379.906 128 384 128S392.188 126.438 395.312 123.312C401.562 117.062 401.562 106.937 395.312 100.688L299.312 4.688C293.062 -1.562 282.937 -1.562 276.688 4.688L180.688 100.688C174.438 106.938 174.438 117.063 180.688 123.312S197.062 129.562 203.312 123.312Z"></path></svg></span>
                      </div>
                      <div className="time-container">
                        <h5 className="black-text" style={{fontSize: "1.2rem"}}>Morning</h5>
                        <p style={{fontSize: "1rem"}}>9:00 AM to 12:00 PM</p>
                      </div>
                    </div>
                    {/* Availablity times */}
                    <div className="availablity-times">
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        9:00 AM
                      </button>
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        10:30 AM
                      </button>
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        11:20 AM
                      </button>
                    </div>
                  </div>
                  {/* =======Afernoon======= */}
                  <div className="day-time-wrapper">
                    <div className="day-time">
                      <div className="icons-container">
                        <span className="icon"><svg class="svg-inline--fa fa-sun fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 128.008C185.422 128.008 128.002 185.426 128.002 256S185.422 383.99 256 383.99S383.998 326.574 383.998 256S326.578 128.008 256 128.008ZM256 351.994C202.98 351.994 160.002 309.016 160.002 256C160.002 202.982 202.98 160.006 256 160.006S351.998 202.982 351.998 256C351.998 309.016 309.019 351.994 256 351.994ZM453.701 256L506.574 179.816C512.496 171.287 513.636 160.475 509.668 150.912C505.699 141.352 497.246 134.539 487.058 132.695L395.795 116.197L379.31 24.953C377.451 14.734 370.638 6.299 361.06 2.33C351.529 -1.639 340.716 -0.451 332.185 5.424L256 58.326L179.798 5.455C171.298 -0.451 160.548 -1.67 150.955 2.33C141.377 6.299 134.548 14.734 132.689 24.953L116.205 116.197L24.957 132.695C14.754 134.539 6.3 141.352 2.332 150.912C-1.637 160.475 -0.496 171.287 5.425 179.816L58.298 256L5.425 332.182C-0.496 340.713 -1.637 351.523 2.332 361.086S14.754 377.459 24.941 379.303L116.205 395.803L132.689 487.047C134.548 497.264 141.377 505.701 150.955 509.67C154.705 511.232 158.642 511.982 162.548 511.982C168.627 511.982 174.627 510.139 179.798 506.576L256 453.674L332.201 506.545C340.701 512.451 351.451 513.67 361.045 509.67C370.623 505.701 377.451 497.264 379.31 487.047L395.795 395.803L487.043 379.303C497.246 377.459 505.699 370.648 509.668 361.086S512.496 340.713 506.574 332.182L453.701 256ZM379.185 366.273C372.607 367.461 367.466 372.617 366.279 379.178L350.451 480.266L265.125 421.051C259.625 417.238 252.375 417.238 246.875 421.051L164.189 481.359L145.72 379.178C144.533 372.617 139.392 367.461 132.814 366.273L31.707 350.43L90.908 265.123C94.72 259.625 94.72 252.375 90.908 246.875L30.629 164.193L132.814 145.727C139.392 144.539 144.533 139.383 145.72 132.82L161.548 31.734L246.875 90.949C252.375 94.76 259.625 94.76 265.125 90.949L347.81 30.641L366.279 132.82C367.466 139.383 372.607 144.539 379.185 145.727L480.293 161.568L421.091 246.875C417.279 252.375 417.279 259.625 421.091 265.123L478.793 348.275L379.185 366.273Z"></path></svg></span>
                      </div>
                      <div className="time-container">
                        <h5 className="black-text">Afternoon</h5>
                        <p style={{fontSize: "1rem"}}>1:00 PM to 4:00 PM</p>
                      </div>
                    </div>
                    {/* Availablity times */}
                    <div className="availablity-times">
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        1:00 PM
                      </button>
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        1:45 PM
                      </button>
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        2:50 PM
                      </button>
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        4:45 PM
                      </button>
                    </div>
                  </div>
                  {/* ========Evening======= */}
                  <div className="day-time-wrapper">
                    <div className="day-time">
                      <div className="icons-container">
                        <span className="icon"><svg class="svg-inline--fa fa-sunset fa-w-18" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sunset" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M91 440.959C93.967 445.418 98.973 448.1 104.336 448.1C117.123 448.1 124.75 433.871 117.656 423.248L90.25 382.203L176.25 364.979C182.625 363.73 187.625 358.863 188.875 352.498L206.125 266.633L279.125 315.182C284.5 318.801 291.5 318.801 296.875 315.182L369.875 266.633L387.125 352.498C388.25 358.738 393.25 363.73 399.75 364.979L485.75 382.203L458.355 423.23C451.258 433.861 458.889 448.1 471.686 448.1C477.037 448.1 482.035 445.432 485.008 440.988L525.75 380.08C528.75 375.713 529.25 369.971 527.25 365.104S520.75 356.617 515.5 355.494L416.5 335.775L396.75 236.93C395.75 231.688 392.125 227.318 387.125 225.197C382.125 223.201 376.5 223.699 372.125 226.695L288.125 282.607L204.125 226.695C199.75 223.824 194 223.201 189.125 225.197C184.25 227.195 180.625 231.688 179.5 236.93L159.75 335.775L60.75 355.494C55.5 356.492 51.125 360.111 49 365.104S47.5 375.713 50.5 380.08L91 440.959ZM287.75 352.25C239.037 352.25 197.824 383.605 182.539 427.105C181.006 431.471 180.977 448.1 197.592 448.1C204.363 448.1 210.094 443.744 212.32 437.453C223.289 406.439 252.988 384.199 287.75 384.199C322.629 384.199 352.24 406.443 363.277 437.463C365.436 443.523 370.889 448.1 378.344 448.1C389.27 448.1 396.68 437.336 393.082 427.1C377.795 383.602 336.568 352.25 287.75 352.25ZM560 480.049H16C7.199 480.049 0 487.238 0 496.025C0 504.811 7.199 512 16 512H560C568.801 512 576 504.811 576 496.025C576 487.238 568.801 480.049 560 480.049ZM276.688 219.312C279.812 222.438 283.906 224 288 224S296.188 222.438 299.312 219.312L395.312 123.312C401.562 117.062 401.562 106.937 395.312 100.688S378.937 94.438 372.688 100.688L304 169.375V16C304 7.156 296.844 0 288 0S272 7.156 272 16V169.375L203.312 100.688C197.062 94.438 186.937 94.438 180.688 100.688S174.438 117.063 180.688 123.312L276.688 219.312Z"></path></svg></span>
                      </div>
                      <div className="time-container">
                        <h5 className="black-text">Evening</h5>
                        <p style={{fontSize: "1rem"}}>5:00 PM to 9:00 PM</p>
                      </div>
                    </div>
                    {/* Availablity times */}
                    <div className="availablity-times">
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        5:00 PM
                      </button>
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        6:30 PM
                      </button>
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        7:10 PM
                      </button>
                      <button type="button" className="availablity-btn">
                        <span><svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM272.014 249.375V128C272.014 119.156 264.857 112 256.014 112S240.014 119.156 240.014 128V256C240.014 260.25 241.701 264.312 244.701 267.312L324.701 347.312C327.826 350.438 331.92 352 336.014 352S344.201 350.438 347.326 347.312C353.576 341.062 353.576 330.937 347.326 324.688L272.014 249.375Z"></path></svg></span>
                        8:20 PM
                      </button>
                    </div>
                  </div>
                  <div className="text-center shedule-bnt-wrapper">
                    <a href="#"><button type="button" id="schedule-appointment" onClick ={() => {history.push("/emailconfirmation");}}>Schedule appointment</button></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End of main content */}
        </div>
        {/* Start of page content */}
        {/* jQuery link */}
        {/* Bootstrap JS link */}
        {/* FontAwsome JS link */}
        {/* Calendar link */}
        {/* Custom JS link */}
      </div>
    );
  }
  
export default Employerschedule
