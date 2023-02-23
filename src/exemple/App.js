import React, { useState } from "react";
import { Modal } from "../lib";

const App = () => {
    const [isOpen, setIsOpen]= useState(false);
    return(
        <div style={{ width: 640, margin: "15px auto" }}>
            <h1>Hello React</h1>
            <button onClick={() => setIsOpen(true)}>Save</button>
            {isOpen && <Modal setIsOpen={setIsOpen} modalText="Employee Created!" />}
        </div>
    )

};

export default App;