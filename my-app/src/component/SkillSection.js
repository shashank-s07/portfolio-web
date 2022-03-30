import React from "react";
import {v4 as uuid} from "uuid";
import { Consumer } from "./context";
import Stack from "./Skills"; 


function SkillSection()
{   
    return(
        <Consumer>
            {value =>{
                const {Skills}=value;
                    let finallrow=[];
                    for(let i =0; i<Skills.length / 4 ; i++)
                    {
                        let skillrow=Skills.slice(i*4,(i+1)*4);
                        finallrow.push
                        (
                            <div key={uuid()} className="d-flex justify-content-around py-5">
                                {   skillrow.map(
                                        (skill)=>
                                        <Stack key={uuid()} skill={skill}/>
                                    )
                                }
                            </div>
                        );
                    }
                
                
                


                    return(
            <div className="w-100 bg-light">
                <div className="container text-center py-5"> 
                    <h1 className="font-weight-light"><span className="text-info">Technology</span> Stack</h1>
                    <div className="lead pb-5">I design , develop and deliver with these weapons</div>
                    <div>
                    {
                       finallrow
                    }
                    </div>
                </div>
            </div>
    );

            }}
        </Consumer>

    );
        }
   

export default SkillSection;