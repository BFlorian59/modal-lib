import React from "react";
import "../components/modal.css";

//fonction qui créait deux propos
const Modal = (props) => {
    const {
      setIsOpen, 
      modalText, 
    } = props;


    //permet d'afficher la modale avec les deux props
    return(
        <>
        <div className="modal">
            <div className="modalBody">
            <div className="modal__content">
            <i onClick={() => setIsOpen(false)} className="fa-solid fa-circle-xmark"></i>
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