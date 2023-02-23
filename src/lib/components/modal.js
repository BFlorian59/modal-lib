import React from "react";
import "../components/modal.css";


const Modal = (props) => {
    const {
      setIsOpen, 
      modalText, 
    } = props;



    return(
        <>
        <div className="modal">
            <div className="modalBody">
            <i onClick={() => setIsOpen(false)} className="fa-solid fa-circle-xmark"></i>
            <div className="modalContent">
                <h2 className="modalText">
                    {modalText}
                </h2>
            </div>
            </div>
        </div> 
        </> 
    )
}

export default Modal;