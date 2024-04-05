import React from 'react';
import "./Mymail.css"
import { Link } from 'react-router-dom';


const MyMail = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to My Mail App</h1>
      </header>
      <main className="content">
        <p>This is the home page of My Mail App. You can start using the app by signing in or creating an account.</p>
        <Link to="signin" className="button">Sign In</Link>
        <Link to="/signup" className="button">Sign Up</Link>
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 My Mail App</p>
      </footer>
    </div>
  );
};

export default MyMail;
