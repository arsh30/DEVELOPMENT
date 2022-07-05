import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    { id: 0, name: "Arsh", age: 22 },
    { id: 1, name: "simran", age: 23 },
    { id: 2, name: "dripti", age: 24 },
    ];
    const [arrayValue, setArrayValue] = useState(bioData);
    const clearArray = () => {
        setArrayValue([]);
    }

  return (
    <div>
      <h1>I am Arshdeep doing useState array</h1>
      {arrayValue.map((elem) => {
        return (
          <h1>
            Name: {elem.name} and Age: {elem.age}
          </h1>
        );
      })}

      <button onClick={() => clearArray()}>clear</button>
    </div>
  );
};

export default UseStateArray;
