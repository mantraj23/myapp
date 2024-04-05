import React from "react";
import Records from "./data/sentemail.json";
import "./Sent.css"

export default function Sent() {
  return (
    <>
    <h3 className="headingw">Your Drafts</h3>
    <div
      className="mail-list"
      style={{ maxHeight: "400px", overflowY: "scroll" }}
    >
      {
        Records.map((record) => {
          return (
            <div className="box" key={record.id}>
              <strong>{record.subject}</strong>
              <br />
              <p>To</p>{record.send_to}
              <br />
              {record.date}
            </div>
          );
        })}
    </div>
    </>
  );
}
