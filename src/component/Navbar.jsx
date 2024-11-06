import React from 'react'

const nav = () => {
  return (
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
    
    </>
  )
}

export default nav