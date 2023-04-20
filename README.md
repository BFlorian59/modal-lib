# modal-lib.

## Features
Modal Text: insert your own content inside the modal.\
Close: with icon on top, on overlay.


## How to use
### In your project root terminal
npm install modal-lib

### Require:
[npm](https://www.npmjs.com/) with npm install

### Exemple:
Install the modal in your project and import the modal. And you can edit the modal text:
```jsx
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
```

