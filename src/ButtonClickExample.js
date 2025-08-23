import React, { useState } from "react";
function ButtonClickExample() {
 const [count, setCount] = useState(0);
 // Event handler functions
 const handleIncrement = () => setCount(count + 1);
 const handleDecrement = () => setCount(count - 1);
 const handleReset = () => setCount(0);
 return (
 <div style={{ textAlign: "center", marginTop: "50px" }}>
 <h2>Counter Example (Functional Component)</h2>
 <h3>Count: {count}</h3>
 <button onClick={handleIncrement} style={{ margin: "5px" }}>
 Increment
 </button>
 <button onClick={handleDecrement} style={{ margin: "5px" }}>
 Decrement
 </button>
 <button onClick={handleReset} style={{ margin: "5px" }}>
 Reset
 </button>
 </div>
 );
}
export default ButtonClickExample