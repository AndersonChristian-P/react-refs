import React from 'react';
import './App.css';
import ReactRef from "./components/ReactRef"
import CallBackRef from "./components/CallBackRef"
import IncDecRef from "./components/IncDecUsingRef"
import Parent from "./components/ParentToChild/Parent"

function App() {
  return (
    <div className="App">
      Ref Examples
      <ReactRef />
      <br />
      <br />
      <CallBackRef />
      <br />
      <br />
      <IncDecRef />
      <br />
      <br />
      <Parent />
    </div>
  );
}

export default App;
