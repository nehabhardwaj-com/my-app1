import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log('Button is clicked', text);
    let newText = text.toUpperCase();
    setText(newText)
    }
    const handlelowerClick = ()=>{
      console.log('Button is clicked', text);
      let newText = text.toLowerCase();
      setText(newText)
      }
  
    const handleOnChange = (event)=>{
      console.log("onchange");
  setText(event.target.value)
      }
  const [text, setText] = useState(""); 
  return (
    <><div>
       <div className="mb-3">
         <h1>{props.heading}</h1>
         <textarea  className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"/>
       </div>
      <button className="btn btn-primary" onClick = {handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick = {handlelowerClick} >Convert to Lowercase</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>
        {text.split(" ").length} words and {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes to Read</p>
    </div>
    <div className="container my-3">
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>

  );
}
