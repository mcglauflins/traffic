import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

import "../styles/index.scss";

import { TrafficLight } from "./component/TrafficLight.js";

ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
