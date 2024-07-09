import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  // let counter=5

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log(counter);
  };

  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
    console.log(counter);
  };

  return (
    <>
      <h1>React Code</h1>
      <h2>counter Value {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
