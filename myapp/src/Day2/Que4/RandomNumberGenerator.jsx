// 4.Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import React, { useState } from "react";

function RandomNumberGenerator() {
  const randomNo = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  const [no, setNo] = useState(randomNo);
  const generate = () => {
    setNo(randomNo);
  };
  return (
    <div>
      <p>{no}</p>
      <button onClick={generate}>Generate Random No</button>
    </div>
  );
}

export default RandomNumberGenerator;
