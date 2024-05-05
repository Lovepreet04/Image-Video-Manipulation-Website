// import '../../Image/logo.png';
import React from 'react'
import { Link } from 'react-router-dom';
import './Layout.css';
import logo from '../../Image/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
        <div className="container ">
          <div><Link   className="navbar-brand" to="">
            <img className='logo' src={logo} alt='LOGO' />
          </Link></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse upper-nav" id="navbarTogglerDemo01">
            <div><ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink activeclassname='active' className="nav-link head-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink   activeclassname='active' className="nav-link head-link" to="/about">ABOUT</NavLink>
              </li>
              <div className="dropdown">
                <NavLink   activeclassname='active' className="dropbtn head-link nav-link" to="/edit">EDIT</NavLink>
                <div className="dropdown-content">
                  <NavLink   activeclassname='active' to="/image">IMAGE</NavLink>
                  <NavLink   activeclassname='active' to="/video">VIDEO</NavLink>
                  {/* <NavLink   activeclassname='active' to="/face">FACE</NavLink> */}
                </div>
              </div>
              <li className="nav-item">
                <NavLink   activeclassname='active' className="nav-link head-link btn" to="/contact">CONTACT</NavLink>
              </li>
            </ul></div>
            <div className='justify-content-end'><div><ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink   className="head-login2 btn px-20" to="authenticate">LogIn</NavLink>
              </li>
              <li className="nav-item">
                <NavLink   className="head-login1 btn px-20" to="authenticate">Sign In</NavLink>
              </li>
            </ul></div></div>

          </div>
        </div>
      </nav>
    </>
  )
}
