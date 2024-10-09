import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './Navbar';

const Backroad =()=>{
   return ( 
    <React.Fragment>
    <Navbar/>
    </React.Fragment>
   )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Backroad></Backroad>)