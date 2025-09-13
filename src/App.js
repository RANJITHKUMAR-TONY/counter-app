import React from "react";
function App() {
 const name = "React Developer";
 const course = "Full Stack Development";
 // Using string literals with backticks
 const message = `Hello, ${name}! Welcome to the ${course} course.`;
 return (
 <div style={{ textAlign: "center", marginTop: "50px" }}>
 <h1>{message}</h1>
 <p>{`This text is displayed using string literals in React.`}</p>
 </div>
 );
}
export default App;