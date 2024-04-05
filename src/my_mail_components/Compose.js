
import "./Composecss.css";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic } from '@fortawesome/free-solid-svg-icons';

const ComposeMail = () => {
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleBoldClick = () => {
    // Implement bold text formatting
    // You can use Markdown syntax or any other method for formatting
    // For simplicity, let's just wrap the selected text in "**"
    setContent(content + '**');
  };

  const handleItalicClick = () => {
    // Implement italic text formatting
    // You can use Markdown syntax or any other method for formatting
    // For simplicity, let's just wrap the selected text in "*"
    setContent(content + '*');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the composed email
    console.log('Sender:', sender);
    console.log('Subject:', subject);
    console.log('Content:', content);
    // Reset form fields
    setSender('');
    setSubject('');
    setContent('');
  };

  return (
    <div className="compose-mail">
      <h2>Compose Mail</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sender">To:</label>
          <input
            type="text"
            id="sender"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <div className="content-editor">
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              required
            />
            <div className="format-icons">
              <FontAwesomeIcon icon={faBold} onClick={handleBoldClick} />
              <FontAwesomeIcon icon={faItalic} onClick={handleItalicClick} />
            </div>
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ComposeMail;
