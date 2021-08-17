import React, { useState } from "react";

function Todoitem(props) {
  return <li onClick={() => props.onChecked(props.id)}>{props.text}</li>;
}

export default Todoitem;
