
import React from 'react'; 
import {useHistory} from "react-router-dom";
import "./bootstrap.min.css"
import "./Global.css"
import "./Emailconfirmation.css"
import "./Module.css"
import "./Employerform.css"


function Employerform() {
  let history = useHistory(); 
  console.log(history, "ddddd")
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
      <div id="email-confirm-page" className="page-wrapper dark-white-page">
        <div className="progress-bar">
          <div className="progress" />
        </div>
        {/* Star of Return-link */}
        <div className="container">
          <div className="row">
            <div className="col-12 return-link-container">
              <a className="return-link black-text" href="#" onclick="history.go(-1)">
              <svg class="svg-inline--fa fa-chevron-left fa-w-10" onClick ={() => {history.push("/employerschedule");}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M243.658 43.114C227.69 27.834 202.362 28.365 187.096 44.364L11.098 228.356C-3.699 243.824 -3.699 268.198 11.098 283.666L187.096 467.657C194.955 475.875 205.471 480 216.002 480C225.94 480 235.908 476.313 243.658 468.907C259.611 453.626 260.174 428.315 244.908 412.347L95.363 256.011L244.908 99.674C260.174 83.706 259.611 58.395 243.658 43.114Z"></path></svg>
              </a>
              <h4 className="sub-title black-text" style={{fontSize: "2rem"}}>Email confirmation</h4>
            </div>
          </div>
        </div>
        {/* End of Return-link */}
        {/* Start of main content */}
        <div className="container main-content">
          <div className="row">
            <div className="col-12 form-container">
              <p className="form-text">Your complimentary consultation: Monday May 7th 10:00 AM</p>
              <form action="#" className="form-field">
                {/* Start of Required */}
                <div className="inputs-contianer">
                  <p className="form-text">Required:</p>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-text"><svg class="svg-inline--fa fa-building fa-w-12" style={{paddingLeft:"10px"}} aria-hidden="true" focusable="false" data-prefix="fa" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48V480C0 497.673 14.327 512 32 512H144V432C144 405.49 165.49 384 192 384S240 405.49 240 432V512H352C369.673 512 384 497.673 384 480V48C384 21.49 362.51 0 336 0ZM160 304C160 312.836 152.836 320 144 320H112C103.164 320 96 312.836 96 304V272C96 263.162 103.164 256 112 256H144C152.836 256 160 263.162 160 272V304ZM160 208C160 216.836 152.836 224 144 224H112C103.164 224 96 216.836 96 208V176C96 167.162 103.164 160 112 160H144C152.836 160 160 167.162 160 176V208ZM160 112C160 120.836 152.836 128 144 128H112C103.164 128 96 120.836 96 112V80C96 71.162 103.164 64 112 64H144C152.836 64 160 71.162 160 80V112ZM288 304C288 312.836 280.836 320 272 320H240C231.164 320 224 312.836 224 304V272C224 263.162 231.164 256 240 256H272C280.836 256 288 263.162 288 272V304ZM288 208C288 216.836 280.836 224 272 224H240C231.164 224 224 216.836 224 208V176C224 167.162 231.164 160 240 160H272C280.836 160 288 167.162 288 176V208ZM288 112C288 120.836 280.836 128 272 128H240C231.164 128 224 120.836 224 112V80C224 71.162 231.164 64 240 64H272C280.836 64 288 71.162 288 80V112Z"></path></svg></span>
                      <input type="text" name="company-name" placeholder="Company Name" required />
                    </div>
                    
                    <div className="user-name-wrapper">
                      <div className="input-group">
                      <span className="input-group-text" ><svg class="svg-inline--fa fa-circle-user fa-w-16" style={{paddingLeft:"10px"}}  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="circle-user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C204.502 464 157.414 445.08 121.049 413.969C137.271 377.508 173.777 352 216.193 352H295.807C338.223 352 374.729 377.508 390.951 413.969C354.586 445.08 307.498 464 256 464ZM414.553 390.311C391.348 348.471 347.051 320 295.807 320H216.193C164.953 320 120.658 348.473 97.449 390.312C66.672 354.037 48 307.188 48 256C48 141.309 141.309 48 256 48S464 141.309 464 256C464 307.188 445.33 354.035 414.553 390.311ZM256 128C211.816 128 176 163.816 176 208C176 252.182 211.816 288 256 288S336 252.182 336 208C336 163.816 300.184 128 256 128ZM256 256C229.533 256 208 234.467 208 208S229.533 160 256 160S304 181.533 304 208S282.467 256 256 256Z"></path></svg></span>
                          <input type="text" name="first-name" id="first-name" placeholder="First name" required />
                      </div>
                      <div className="input-group">
                        <input  type="text" name="last-name" placeholder="Last name" required />
                      </div>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text"><svg class="svg-inline--fa fa-envelope-open-text fa-w-16" style={{paddingLeft:"10px"}} aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope-open-text" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M496 192C487.164 192 480 199.162 480 208V464C480 472.836 472.836 480 464 480H48C39.164 480 32 472.836 32 464V208C32 199.162 24.836 192 16 192S0 199.162 0 208V464C0 490.51 21.49 512 48 512H464C490.51 512 512 490.51 512 464V208C512 199.162 504.836 192 496 192ZM64.875 276.338C65.158 277.324 65.428 278.266 65.885 279.164C66.32 280.027 66.896 280.77 67.492 281.549C68.187 282.459 68.885 283.299 69.756 284.039C70.051 284.289 70.199 284.643 70.516 284.875L203.281 382.594C218.703 393.969 236.938 400 256 400S293.297 393.969 308.703 382.594L441.484 284.875C441.801 284.643 441.949 284.289 442.244 284.039C443.115 283.299 443.813 282.459 444.508 281.549C445.104 280.77 445.68 280.027 446.115 279.164C446.572 278.266 446.842 277.324 447.125 276.338C447.428 275.277 447.684 274.26 447.766 273.162C447.797 272.758 448 272.412 448 272V48C448 21.531 426.469 0 400 0H112C85.531 0 64 21.531 64 48V272C64 272.412 64.203 272.758 64.234 273.162C64.316 274.26 64.572 275.277 64.875 276.338ZM96 48C96 39.188 103.172 32 112 32H400C408.828 32 416 39.188 416 48V263.92L289.719 356.844C269.937 371.469 242.078 371.469 222.266 356.844L96 263.92V48ZM352 240C352 231.162 344.836 224 336 224H176C167.164 224 160 231.162 160 240C160 248.836 167.164 256 176 256H336C344.836 256 352 248.836 352 240ZM176 160H336C344.836 160 352 152.836 352 144C352 135.162 344.836 128 336 128H176C167.164 128 160 135.162 160 144C160 152.836 167.164 160 176 160Z"></path></svg></span>
                      <input type="email" name="company-email" placeholder="Company Email" required />
                    </div>
                  </div>
                </div>
                {/* End of Required */}
                {/* Optional */}
                <div className="inputs-contianer optional-inputs">
                  <p className="form-text">Optional:</p>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-text"><svg class="svg-inline--fa fa-phone-flip fa-w-16 phone-icon" style={{paddingLeft:"10px"}} aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-flip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M1.153 382.406L22.95 476.875C27.716 497.562 45.888 512 67.122 512C312.436 512 512 312.437 512 67.123C512 45.904 497.531 27.779 476.828 23.06L382.437 1.154C361.233 -3.737 339.343 7.279 330.624 27.373L287.014 129.154C279.03 147.842 284.186 169.077 299.858 181.998L340.374 215.186C311.671 267.921 267.811 311.78 215.061 340.499L181.92 300.03C169.373 284.577 147.669 279.265 129.169 286.952L27.419 330.593C27.403 330.624 27.387 330.624 27.372 330.624C7.294 339.312 -3.738 361.093 1.153 382.406ZM32.341 375.218C30.903 368.968 34.153 362.562 40.059 359.999L141.638 316.437C146.982 314.218 153.435 315.718 157.138 320.28L198.529 370.781C203.232 376.531 211.326 378.312 217.967 374.999C285.795 341.624 341.53 285.905 374.905 218.092C378.187 211.421 376.437 203.374 370.687 198.655L320.186 157.28C315.608 153.498 314.077 147.248 316.436 141.733L360.015 40.029C362.155 35.092 367.03 31.998 372.265 31.998C373.249 31.998 374.249 32.107 375.249 32.342L469.656 54.248C475.765 55.639 480 60.935 480 67.123C480 294.78 294.78 480 67.122 480C60.981 480 55.513 475.656 54.138 469.687L32.341 375.218Z"></path></svg></span>
                      <input type="tel" name="phone-number" placeholder="Telephone" />
                    </div>
                    <div className="textarea-container" style={{fontSize: "1.125rem"}}>
                      <textarea name="message" cols={100} rows={6} placeholder="Your story. 
What would you like your counselor to know
for your scheduled consultation?" defaultValue={""} />
                    </div>
                  </div>
                </div>
                {/* Start of large bottom button */}
                <div className="row">
                  <div className="col-lg-4 col-md-3 col-sm-2 col-2" />
                  <div className="col-lg-4 col-md-6 col-8">
                    <div className="linear-btn-container">
                      <p className="mb-4 form-text">If you don't see an email within a few minutes, be sure to check your spam folder.</p>
                      <button type="button" className="linear-btn blue-btn" onClick ={() => {history.push("/confirm");}}>Confirm</button>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-2" />
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
export default Employerform