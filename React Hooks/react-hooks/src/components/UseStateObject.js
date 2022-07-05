import React, { useState } from "react";

const UseStateObject = () => {
  const [data, setData] = useState({
    name: "Arsh",
    age: 22,
    phone: 123,
    degree: "Btech",
  });

  const changeObject = () => {
    setData({ ...data, name: "Arshdeep Singh", age: 24 }); // jo jo update krna hai vo 2nd parameter me bhjege
  };

  return (
    <div>
      <h3>USE STATE OBJECT:</h3>
      <h3>{`My name is ${data.name} & age is ${data.age} & the degree is ${data.degree}`}</h3>
      <button onClick={() => changeObject()}>Update the values</button>
    </div>
  );
};

export default UseStateObject;
