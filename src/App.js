import "./styles.css";
import { Inbox } from "./pages/Inbox";
import { Trash } from "./pages/Trash";
import { Spam } from "./pages/Spam";

import { Details } from "./pages/Details";
import { NavLink } from "react-router-dom";

import { Route, Routes } from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
  padding: "1rem 0", // Top and bottom padding only
  marginRight: "69rem", // Right margin only
  fontWeight: isActive ? "800" : "200",
  color: isActive ? "red" : "black",
  textDecoration: "none",
  borderRight: isActive ? "solid 3px black" : "none", // Correct right border
});

export default function App() {
  return (
    <div className="App">
      <h1>Mail Box</h1>
      <p>31 March 2029</p>

      <div className="layout">
        <nav className="nav">
          <NavLink style={getActiveStyle} to="/inbox">
            Inbox
          </NavLink>
          <NavLink style={getActiveStyle} to="/spam">
            Spam
          </NavLink>
          <NavLink style={getActiveStyle} to="/trash">
            Trash
          </NavLink>
        </nav>
      </div>

      <div className="main-content">
        <Routes>
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/inbox/:mailId" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}
