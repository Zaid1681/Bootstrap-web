import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
function Navbar() {
  return (
    <div className='navbar__contianer'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="navbar__container-logo">
            <img src={logo} alt="" />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Portfolio">Portfolio</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Contact">Contact Us</a>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar

