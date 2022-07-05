import React, { useState } from "react";
import { useEffect } from "react";

const UseEffectChallenge3 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `chats (${count})`;
    } else {
      document.title = `chats`;
    }
  });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

// Baically we can not use hooks inside the condition but
// we can use if-else inside the hook

export default UseEffectChallenge3;
