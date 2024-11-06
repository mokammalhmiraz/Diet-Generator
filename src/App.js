import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import Login from "./login";
// import Career from "./Career";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("authenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Diet Plan
            </a>
            <button className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="ms-auto navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/home">
                          Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Food
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Chart Show
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login/SignUp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="App">
        <div className="App">
          {isAuthenticated ? (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <Link className="navbar-brand" to="/home">
                    MySite
                  </Link>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/home">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                          Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="container mt-4">
                <Routes>
                  <Route
                    path="/home"
                    element={<h2>Welcome to the Home Page</h2>}
                  />
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
