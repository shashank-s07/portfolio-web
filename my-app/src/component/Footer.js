import React from "react";
import {Link} from "react-router-dom";
function Footer() {
    return(
        <footer>
        <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
            <div className="row pt-5">
                <div className="col-12 ">
                    <h2 className="text-center pb-4 " style={{color:"white"}}>Interested in working with me ? </h2>
                    <Link to="/contact">
                     <button className="btn btn-outline-light btn-lg " >Let's talk?</button>
                    </Link>
                    
                </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-4">
                        <h5 className="text-info pt-5">More Links</h5>
                        <Link to="/" className="text-light" style={{textDecoration: "none"}}>Home</Link>
                        <a href="/" className="text-light d-block" style={{textDecoration: "none"}}>Project</a>
                        <Link to="/contact" className="text-light"  style={{textDecoration: "none"}}>Contact me</Link>
                        <Link to="/write-a-recommendation" className="text-light d-block" style={{textDecoration: "none"}}>Write Recommidation</Link>
                    </div>
                    <div className="col-12 col-md-4 p-5 ">
                        <p className="text-justify" style={{color: "white" , textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint officia optio quisquam praesentium culpa impedit dolorem vel, atque aliquam nihil explicabo debitis porro quis aut. Dolore natus eligendi labore!</p>
                    </div>
                    <div className="col-12 col-md-4" style={{textDecoration: "none"}}>
                        <h5 className="text-info">Social</h5>
                        <a href="/"><i className="fab fa-instagram text-light h1 d-block"></i></a>
                        <a href="https://www.linkedin.com/in/shashank-sharmas07"><i className="fab fa-linkedin text-light h1 d-block"> </i></a>
                        <a href="/"><i className="fab fa-instagram-square text-light h1 d-block"></i></a>
                        <a href="/"><i className="fab fa-facebook-square text-light h1 d-block"></i></a>
                    </div>
                  </div>
                    <div className="py-3"> 
                        <p className="text-muted">Copyright © Shashank Kaushik Sharma 2021</p>

                    </div>
                </div>
         </footer>
    );
}

export default Footer;