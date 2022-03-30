import React from "react";
import Shashank from "../assest/myimage.jpg"

function Title() {

    const name="Shashank Kaushik Sharma";
    const leadtext=" I am a computer science engineering student";
    return(
        <div className="container p-5">
        <div className="row text-center align-items-center my-5  ">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid rounded-circle w-75"
              src={Shashank}
              alt="MY PHOTO"
            />
          </div>
          <div className="col-12 col-md-6 pt-5">
            <div className="font-weight-light" style={{fontSize:"60px"}} >
              Hi! I am <span className="text-info">{name}</span>
              <h6 className="font-italic">{leadtext}
              </h6>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Title;