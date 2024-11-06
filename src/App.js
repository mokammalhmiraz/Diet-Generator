import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link,createRoutesFromElements,createBrowserRouter,Route,RouterProvider } from "react-router-dom";
import Home from "./layout/pages/home";
import Profile from "./layout/pages/profile";
import Login from "./layout/pages/login";
// import Career from "./Career";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
      path="/"
      element={<RootLayouts/>}
        >
          <Route
      path="/"
      element={<Home/>}
        ></Route>
        <Route
      path="/shop"
      element={<SlickSlider/>}
        ></Route>
        <Route
      path="/contacts"
      element={<Contacts/>}
        ></Route>
        <Route
      path="/login"
      element={<Login/>}
        ></Route>
        <Route
      path="/checkout"
      element={<Checkout/>}
        ></Route>
        <Route
      path="/shop"
      element={<SlickSlider/>}
        ></Route>
        <Route
      path="/sign-up"
      element={<Signup/>}
        ></Route>
        <Route
      path="*"
      element={<Errorpage/>}
        ></Route>
        </Route>
    </Route>
  ))

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("authenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);
  return (
    
    <>
     <RouterProvider router={router}/>
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
    </>
  );
}

export default App;
