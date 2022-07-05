import React, { useEffect, useState } from "react";

const UseEffects = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("hello use Effect!!");
    document.title = `chats ${count}`;
  });

  console.log("Hello from outside 2");

  return (
    <div>
      <h1>UseEffects hook!!</h1>
      {/* {console.log("Hello from outside")} */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default UseEffects;
