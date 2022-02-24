import React from 'react'

function Alert(props) {
    console.log(props);
    const capitalize = (word) =>{
        var lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    const mystyle = {
      height: 50
    }
  return (
    <div style={mystyle}>
   { props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div> }
      </div>
  )
}

export default Alert
