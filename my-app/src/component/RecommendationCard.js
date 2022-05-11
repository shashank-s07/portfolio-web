
  import React, { useState } from "react";
  import { Modal } from "react-bootstrap";
  import image from "../assest/free-stock-image-1.jpg"
  function RecommendationCards(props) {
    const { name, company, designation, message } = props.recommendation;
  
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    let newmessage;
    if (message.length > 25) {
      newmessage = message.slice(0, 26) + "...";
    } else {
      newmessage = message;
    }
  
    return (
      <div className="col-12 col-md-4">
        <a onClick={handleShow}>
          <div className="card shadow h-100">
            <div style={{fontStyle:"italic"}} className="card-body">
              <h4 className="card-text">{newmessage}</h4>
              <p className="card-text text-secondary mb-0">{name}</p>
              <p className="card-text text-secondary">
                {designation} at {company}
              </p>
            </div>
          </div>
        </a>
        <Modal  show={show} >
          <Modal.Header  style={{backgroundColor:"#EEA47FFF" }}>
            <Modal.Title>{name}</Modal.Title>
            <button className="btn btn-close" data-bs-dismiss="modal"></button>
          </Modal.Header>
          <Modal.Body style={{border:"groovy",backgroundColor:"#EEA47FFF"}}>
            <h4 >{message}</h4>
            <div className="lead-text text-end ">
              - {designation} at {company}
            </div>
          </Modal.Body>
          <Modal.Footer style={{backgroundColor:"#EEA47FFF"}  } >
            <button className="btn btn-success" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default RecommendationCards;
  