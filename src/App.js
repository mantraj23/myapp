import "./App.css";
import Compose from "./my_mail_components/Compose";
import Navbar from "./my_mail_components/Navbar";
import Settings from "./my_mail_components/Settings";
import Sidebar from "./my_mail_components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar title="MYMAIL" newMail="Compose +" />
      <Sidebar />
      <Router>
      <main>
        <Routes>
          <Route path="/" element={<Compose />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      </Router>
    </>
  );
}

export default App;
