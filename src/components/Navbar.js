import React from 'react'
import logo from '../images/logo.jpeg';
import '../App.css';
import { NavLink } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" activeclassname="active" aria-current="page" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeclassname="active">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services" activeclassname="active">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/guide" activeclassname="active">Guide</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" activeclassname="active">Contact Us</NavLink>
                    </li>
                </ul>
                    {/* Dark Mode Toggle Switch */}
                    {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode
                        </label>
                    </div>  */}
                </div>
            </div>
        </nav>
  )
}
