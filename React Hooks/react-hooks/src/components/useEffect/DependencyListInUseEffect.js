import React, { useEffect, useState } from "react";

const DependencyListInUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `chats (${count})`;
    } else {
      document.title = `chats`;
    }
  }, []); // 2nd parameter is dependency matrix,
    // agr empty matrix denge to useEffect will only run one time
    // pehle hora tha ki agr kuch nhi pass krre the to jb jb state update kri thi tab run hora tha
    
  return (
    <div>
      <h4>DependencyListInUseEffect</h4>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};

export default DependencyListInUseEffect;
