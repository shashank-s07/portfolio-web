import React, { createContext } from "react";
import Projectcrd from "./Projectcrd";
import assest from "../assest/myimage.jpg"
import { Consumer } from "./context";
import AllProjects from "./AllProjects";
import {Link} from "react-router-dom"




function Project(){
  return(
       
    <Consumer >
    {value =>{
      const {projects}=value;
         return(
          <div className="container text-center mt-4 ">
      <h1 className="text-width-light">My<span className="text-info">Project</span></h1>
      <div className ="lead">I bulid products.Just like these : </div>
      <div className="row my-3 pt-3" >
        {
            projects.slice(0,3).map((project) =>
            (
              <div key={project.id} className="col-12 col-md-4 my-4">
              <Projectcrd title={project.title} excerpt={project.excerpt} imageUrl={project.imageUrl} id={project.id}  />
            
            </div>
             ) )
  
        }
         </div>
        
      <div className="my-5">
        <Link to="/allprojects" className="text-dark text-right" style={{textlign: "right" , textDecoration: "none"}}>
          <h5>See more projects
            <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </Link>
      </div>
    </div>
      );

    }}
  </Consumer>

  );
  

  
 
  }

  export default Project;