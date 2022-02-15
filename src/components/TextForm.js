import React from "react";

export default function TextForm(props) {
  return (
    <div>
     <form>
  <div class="mb-3">
      <h1>{props.heading}</h1>
    {/* <label for="mybox" class="form-label">Email address</label> */}
    <textarea  class="form-control" id="mybox" rows="10"/>
    </div>
  </form>
    </div>
  );
}
