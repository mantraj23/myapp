import  Help  from "./my_mail_components/Help";
import "./App.css";
import Compose from "./my_mail_components/Compose";
import MyMail from "./my_mail_components/MyMail";
import Navbar from "./my_mail_components/Navbar";
import Settings from "./my_mail_components/Settings";
import Sidebar from "./my_mail_components/Sidebar";
import Inbox from "./my_mail_components/Inbox";
import Sent from "./my_mail_components/Sent";
import Draft from "./my_mail_components/Draft"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar title="MYMAIL" newMail="Compose +" />
          <Sidebar/>
          <main>
            <Routes>
              <Route path="/compose" element={<Compose />} />
              <Route path="/settings" element={<Settings />}>
              </Route>
              <Route path="/" element ={<MyMail/>}> </Route>
              <Route path ="/help" element={<Help/>}></Route>
              <Route path ="/inbox" element={<Inbox/>}></Route>
              <Route path ="/sent" element={<Sent/>}></Route>
              <Route path ="/draft" element={<Draft/>}></Route>
              
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
