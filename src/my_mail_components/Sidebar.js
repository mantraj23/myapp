import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function sidebar() {
  return (
    <div className="sidebar-sticky">
      <button
        className="sidebarButton"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
         <FontAwesomeIcon icon={faBars} />
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            MY MAIL
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="sidebar">
          <h4>Your Mails</h4>
          <div className="sidebar-menu">
            <ul>
              <li>
                <Link to="/inbox">Inbox</Link>
              </li>
              <li>
                <Link to="/sent">Sent</Link>
              </li>
              <li>
                <Link to="/draft">Draft</Link>
              </li>
              <li>
                <Link to="/compose">Compose</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
