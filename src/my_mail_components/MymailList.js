import React from 'react';
import "./components.css";

const MailList = ({ emails, onEmailClick }) => {
  return (
    <div className="mail-list">
      <h2>Inbox</h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id} onClick={() => onEmailClick(email)}>
            <div className="sender">{email.sender}</div>
            <div className="subject">{email.subject}</div>
            <div className="date">{email.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailList;
