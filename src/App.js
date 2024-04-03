import "./App.css";
import { useState,useEffect  } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Graph from "./components/pages/Graph";
import Metamask from "./components/pages/Metamask";
import Assets from "./components/pages/Assets";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <div className="content">
          <div
            className="sideBarContainer">
            <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          </div>
          <div
            className="mainContainer"
            style={{width :isSidebarOpen ? "calc(100% - 115px)" : "calc(100% - 325px)",
            transition :isSidebarOpen ? "0.5s ease" : "0.5s ease"}}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/graph" element={<Graph />} />
              <Route path="/metamask" element={<Metamask />} />
              <Route path="/assets" element={<Assets />} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
