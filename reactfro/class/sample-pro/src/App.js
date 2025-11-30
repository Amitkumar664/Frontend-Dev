import React from 'react';
import './App.css';
import Button3 from "./Components/Button3";

function App() {

  var temp = 10;
  var temp2 = {
    name: "pragati",
    rollNo: 1,
    university: "gla"
  };

  return (
    <div className="App">
      <h1>akash</h1>
      <p>{temp}</p>

      {/* Do NOT use key as a prop */}
      <Button3 value={temp} info={temp2} />
    </div>
  );
}

export default App;
