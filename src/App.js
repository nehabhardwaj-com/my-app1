// import logo from './logo.svg';
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Switch } from "react-router-dom";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
   const [mode, setMode] = useState('light')
   const [alert, setAlert] = useState(null)
   const [button, setButton] = useState('primary')

 const showAlert = (message, type)=>{
  setAlert({
    msg:  message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null)
  }, 3000)
 }
 console.log(button,'button===')
   const toggle = () =>{
     if(mode === 'light'){
       setMode('dark')
       document.body.style.backgroundColor = '#042743'
       showAlert("Dark mode has been enabled","success")
       setButton('primary')
     }else{
       setMode('light')       
       document.body.style.backgroundColor = 'white'
       showAlert("Light mode has been enabled","success")
       setButton('primary')
      }
   }

   const toggle1 = () =>{
    if(mode === 'light' || mode === 'red' || mode === 'dark'){
      setMode('green')
      document.body.style.backgroundColor = '#5db78d'
      showAlert("Green mode has been enabled","success")
      setButton('success')
    }else{
      setMode('light')       
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      setButton('primary')
     }
  }
  const toggle2 = () =>{
    if(mode === 'light' || mode === 'green' ||mode === 'dark'){
      setMode('red')
      document.body.style.backgroundColor = '#a53333'
      showAlert("Green mode has been enabled","success")
      setButton('danger')
      document.title ="textUtils - Red"
    }else{
      setMode('light')       
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      setButton('primary')
     }
  }
  return (
    // <Router>
    <>
    <Navbar title="TextUtil" mode={mode} toggle={toggle} toggle1={toggle1} toggle2={toggle2} />
    <Alert alert={alert}/>
    <div className="container my-3">
     {/* <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter Text to Analyse Below" mode={mode} button={button} />
          {/* </Route>
        </Switch> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
