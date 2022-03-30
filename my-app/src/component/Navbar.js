import React from "react"
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-white">
          <div className="container my-2">
          <Link to="/" className="navbar-brand text-dark font-weight-bold" >Shashank Kaushik Sharma </Link>
          <Link to="/contact" className=" ml-auto mx-3">
            <button className="btn btn-outline-info">Contact me</button>
          </Link>
          
          <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcoll"
          >
            <span><i className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-0" id="navcoll">
            <div className="navbar-nav">
              <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-1 my-auto">BLOG</a>
              <Link to ="/allprojects" className="nav-item nav-link text-dark font-weight-bold mx-1 my-auto">My Project</Link>
              <a href="/" className="nav-item nav-link text-dark font-weight-bold mx-1 my-auto">Help</a>
            </div>
           </div>
          </div>
          
      </nav>

    );
      
}

export default Navbar;