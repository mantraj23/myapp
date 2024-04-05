import React from "react";
import Records from "./data/emails.json";
import "./Inbox.css"

export default function Inbox() {
  return (
    <>
    <h3 className="headingw">Your Inbox</h3>
    <div
      className="mail-list"
      style={{ maxHeight: "400px", overflowY: "scroll" }}
    >
      {
        Records.map((record) => {
          return (
            <div className="box-wrapper" key={record.id}>
              <strong>{record.subject}</strong>
              <br />
              <p>From</p>{record.sender}
              <br />
              {record.date}
            </div>
          );
        })}
    </div>
    </>
  );
}
