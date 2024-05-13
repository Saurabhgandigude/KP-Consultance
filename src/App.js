import React from "react";
import Topbar from "./Topbar";
import Middleimage from "./Middleimage";
import Largebox from "./Largebox";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Middleimage/>
      <Largebox/>
    </div>
  );
}

export default App;
