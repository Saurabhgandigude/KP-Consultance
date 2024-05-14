import React from "react";
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Topbar from "./Topbar";
import Middleimage from "./Middleimage";
import Largebox from "./Largebox";
import Largebox2 from "./Largebox2";
import EnquiryForm from "./EnquiryForm";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar/>
      <Middleimage/>
      <Largebox/>
      <Largebox2/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;














