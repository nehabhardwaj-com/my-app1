// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
   const [mode, setMode] = useState('light')
   const toggle = () =>{
     if(mode === 'light'){
       setMode('dark')
       document.body.style.backgroundColor = '#042743'
     }else{
       setMode('light')
       document.body.style.backgroundColor = 'white'
     }
   }
  return (
    <>
    <Navbar title="TextUtil" mode={mode} toggle={toggle}/>
    <div className="container my-3">
    <TextForm heading="Enter Text to Analyse Below" mode={mode}/>
    {/* <About mode={mode}/> */}
    </div>
   </>
  );
}

export default App;
