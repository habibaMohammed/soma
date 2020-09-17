import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <nav class="navbar navbar-expand-lg  navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Course</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Students</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        
      </ul>
    </nav>
  </div>
);

export default Footer;