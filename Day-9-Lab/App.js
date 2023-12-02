import logo from './logo.svg';
import './App.css';
import Count from './Count';
import React, { useEffect, useState } from 'react';

function App() {
  const [count,setCount] = useState(0)
  const [data, setData] = useState(100)
  useEffect(() =>{
    console.warn("Using useEffect for Count")
  },[count])
  useEffect(() =>{
    console.warn("Using useEffect for Data")
  },[data])
  return (
    <div>
        <h1>Count : {count}</h1>
        <h1>Data : {data}</h1>
        <Count ct={count} dt={data}/>
        <button onClick={()=>setCount(count+1)}> Update Counter </button>  
        <button onClick={()=>setData(data+10)}> Update Data </button>       
    </div>
  );
}
export default App;
