import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Settings() {
  return (
    <div className="helpPage">
      <h2>MY MAIL HELP</h2>
      <p> We are here to help you</p>
      <nav>
        <Link to="/faq">View the Faq</Link>
        <Link to="/contactus">View the Faq</Link>
      </nav>

      <Outlet />
    </div>
  );
}
