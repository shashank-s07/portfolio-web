import React from "react";
import {v4 as uuid} from "uuid";
function Skills(props)
{
    let {name,totalstars,activestars,imageurl}=props.skill

    const star=[];
     for(let i=0; i<totalstars;i++)
    {
        if(i<activestars)
        {
            star.push(<span key={uuid()} className="text-info">★</span>);
        }
        else
        {
            star.push(<span key={uuid()}>★</span>);
        }
    }
     return(
     <div > 
          <img className="rounded-circle" src={imageurl} alt={name} style={{height:"100px", width:"100px"}} />
     <div>
              {
                  star
              }
          </div>
    </div>
          );
}
export default Skills; 