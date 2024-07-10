import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter=5

  const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
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
