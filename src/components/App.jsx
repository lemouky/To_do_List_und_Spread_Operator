import React, { useState } from "react";

function App() {
  const [inputText, SetInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    SetInputText(newValue);
  }

  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button>
          <span onClick={addItems}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
