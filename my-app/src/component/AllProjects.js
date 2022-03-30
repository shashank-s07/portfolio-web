import React from 'react'
import { Consumer } from './context';
import Projectcrd from './Projectcrd';


function AllProjects() {
    return ( 
        <Consumer>
            {value => {
                const{projects}=value;
                return(
                    <div className="container text-center my-5 py-5">
                      <h1 className="font-weight-light py-5">
                         All my<span className="text-info"> Projects</span>
                      </h1>
                      <div className="row my-4 pt-4">
                         {projects.map((project) =>
            (
                         <div key={project.id} className="col-12 col-md-6 my-2">
                            <Projectcrd title={project.title} excerpt={project.excerpt} imageUrl={project.imageUrl} id={project.id}  />
            
            </div>
                      ))}
                     </div>
                 </div>
             );
      }}
    </Consumer>
  );
         
        
    
}

export default AllProjects;