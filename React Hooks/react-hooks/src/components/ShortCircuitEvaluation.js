import React from "react";
import { useState } from "react";
import "../App.css";

const ShortCircuitEvaluation = () => {
  const [demo, setDemo] = useState("check check");
  return (
    <div>
      <h2 className="App">ShortCircuitEvaluation</h2>

      <h1>{demo || "arsh"}</h1>
      <h1>{demo && "vinod"}</h1>
    </div>
  );
};

// Short circuit evaluation is baically: when we can render multiple elements like agr true hai to yeh component show kro vrna yeh msg like if-else
// it has 2 operator: 1) || OR operator: agr data true ho toh we get the left side data
//  2) && AND operator : if data is true then we get the right side data

export default ShortCircuitEvaluation;
