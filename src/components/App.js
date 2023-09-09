import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)
function handleDoubleClick()
{
  alert("cant edit it")
}
function handleClick()
{
  setCount(count+1)
}
  return (
    <div class="ball">
      <h1 class="count" onDoubleClick={handleDoubleClick}>{count}</h1>
      <button class='increment-button' onClick={handleClick}>Increment</button>
    </div>
  )
}


export default App;