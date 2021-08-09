import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Homefile from "./components/Router/Homefile"
import Schedule from "./components/Router/Schedule"
import Schedulecare from "./components/Router/Schedulecare"
import Memberschedule from "./components/Router/Memberschedule"
import Payment from "./components/Router/Payment"
import Enrollconfirmation from "./components/Router/Enrollconfirmation"
import Emailconfirmation from "./components/Router/Emailconfirmation"
import Confirm from "./components/Router/Confirm"
import Test from "./components/Router/Test"


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();