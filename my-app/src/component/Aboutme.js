import React from "react";

function Aboutme(){
    return(
        <div className="bg-light w-100px">
    <div className="container-fluid text-center mt-5">
      <h1 className="text-width-light pt-5"><span className="text-info">About</span>Me
      </h1>
      <div className="lead">
        I can develop the front and the back of an app
       </div>
       <div className="row">
         <div className="col-12 col-md-6 my-5 px-5">
           <h4 className="text-weight-bold">What can I do ?</h4>
           <p style={{textAlign: "justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nemo blanditiis dolores, iusto at cupiditate voluptate laboriosam itaque non neque facere aliquid, illo sit ad aspernatur! Quos, consequatur. Suscipit, dolores.</p>
         </div>

         <div className="col-12 col-md-6 my-5 px-5  ">
          <h4 className="text-weight-bold">What do I belive in ?</h4>
          <p style={{textAlign: "justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nemo blanditiis dolores, iusto at cupiditate voluptate laboriosam itaque non neque facere aliquid, illo sit ad aspernatur! Quos, consequatur. Suscipit, dolores.</p>
        </div>

        <div className="col-12 col-md-6 px-5">
          <h4 className="text-weight-bold">How can I help you ?</h4>
          <p style={{textAlign: "justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nemo blanditiis dolores, iusto at cupiditate voluptate laboriosam itaque non neque facere aliquid, illo sit ad aspernatur! Quos, consequatur. Suscipit, dolores.</p>
        </div>

        <div className="col-12 col-md-6 px-5 mb-5">
          <h4 className="text-weight-bold">What am I doing ?</h4>
          <p style={{textAlign: "justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nemo blanditiis dolores, iusto at cupiditate voluptate laboriosam itaque non neque facere aliquid, illo sit ad aspernatur! Quos, consequatur. Suscipit, dolores.</p>
        </div>
      </div>
       </div>

      </div>
      
       );
    
}

export default Aboutme;