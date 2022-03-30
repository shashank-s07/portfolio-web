import React from 'react'
import {Link} from "react-router-dom";

function Projectcrd(props) {
    const {title,excerpt,imageUrl,id}= props;
   
    return (
        
        <div className="card my-3 shadow  h-100">
          <img className="card-image-top" src={imageUrl} alt="free image"/>
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text" >{excerpt}</p>
            <Link to={`/project/${id}`}className="stretched-link"></Link>
          </div>  
        </div>
         

    );
    
}

export default Projectcrd;