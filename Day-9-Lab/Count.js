import React, { useEffect, useState } from "react";
import './App.css'
function App(props){
    useEffect(()=>{
        alert("count is "+props.ct)
    })
  return(
        <div className="App">
            <h1>Count is : {props.ct}</h1>
            <h1>Data is : {props.dt}</h1>
            
        </div>
    );
}
export default App;