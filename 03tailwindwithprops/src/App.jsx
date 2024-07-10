import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-amber-400 text-black rounded-md ">Hello</h1>
     <Card code="react" btn="click"/>
     <Card code={"tailwind"} btn={"visit"}/>
    </>
  );
}

export default App;
