import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log('Button is clicked', text);
    let newText = text.toUpperCase();
    setText(newText)
    }
  
    const handleOnChange = (event)=>{
      console.log("onchange");
  setText(event.target.value)
      }
  const [text, setText] = useState("Enter text here......"); 
  return (
    <div>
       <div className="mb-3">
         <h1>{props.heading}</h1>
         <textarea  className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"/>
       </div>
      <button className="btn btn-primary" onClick = {handleUpClick} >Convert to Uppercase</button>
    </div>
  );
}
