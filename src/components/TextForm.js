import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    }
    const handlelowerClick = ()=>{      
      let newText = text.toLowerCase();
      setText(newText)
      }
    const handleClearClick = ()=>{       
        setwordCount(0);
        setcharacter(0);
        setCount(0);
        let newText = " ";
        setText(newText);
        }
        const handleFirstClick = ()=>{       
         
          let arr = text.split(". ");
          for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);        
        }
        const str2 = arr.join(". ");
          setText(str2);
          }
    const handleCopyClick = ()=>{
          let newText = document.getElementById('mybox');
          newText.select();
          navigator.clipboard.writeText(newText.value)
          setcopiedText(newText);
          setText(newText);
          }
    const handlecountClick = ()=>{
            let newText =text.split("d").length;
            setCount(newText);
            // setText(newText);
            }
    const handlePasteClick = ()=>{
              setText(copiedText);
            }
  
    const handleOnChange = (event)=>{
      console.log("onchange");
      setwordCount(text.split(" ").length)
      setcharacter(text.length)
      setText(event.target.value)
      }
  const [text, setText] = useState("");   
  const [wordCount, setwordCount] = useState(0);
  const [character, setcharacter] = useState(0);   
  const [copiedText, setcopiedText] = useState("");
  const [count, setCount] = useState(0);   
  return (
    <><div>
       <div className="mb-3">
         <h1>{props.heading}</h1>
         <textarea  className="form-control" onChange={handleOnChange} value={text} id="mybox" rows="8"/>
       </div>
      <button className="btn btn-primary" onClick = {handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick = {handlelowerClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick = {handleFirstClick} >First Letter Uppercase</button>
      <button className="btn btn-primary mx-3" onClick = {handleClearClick} >Clear Text</button>
      <button className="btn btn-primary mx-3" onClick = {handleCopyClick} >Copy</button>
      <button className="btn btn-primary mx-3" onClick = {handlePasteClick} >Paste</button>
      <button className="btn btn-primary mx-3" onClick = {handlecountClick} >Count</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>
        {wordCount} words and {character} characters
      </p>
      <p>{0.008 * wordCount} Minutes to Read</p>
    </div>
    <div className="container my-3">
      <h2>Preview</h2>
      <p>{text}{count}</p>
    </div>
    </>

  );
}
