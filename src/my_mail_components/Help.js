import React from "react";
import "./Help.css";

import { NavLink} from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className="help-layout">

      <h2>Help & Support</h2>
      <h4>WE ARE HERE TO HELP YOU</h4>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
    </div>
  )
}