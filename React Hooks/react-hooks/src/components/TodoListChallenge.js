import React, { useState } from "react";

const TodoListChallenge = () => {
  const myBioData = [
    { id: 0, name: "Arsh", age: 22 },
    { id: 1, name: "amriti", age: 23 },
    { id: 2, name: "deepak", age: 24 },
    { id: 3, name: "prabutej", age: 25 },
  ];
  const [myArray, setMyArray] = useState(myBioData);

  const clearArray = () => {
    setMyArray([]);
  };

  const removeItem = (id) => {
    // alert(id);
    const myNewArray = myArray.filter((elem) => {
      return elem.id != id; //eg: suppose we click on the first item whose id is 0. so 0 == 0 they match but we want jo reh gye vo aaye
    });
    setMyArray(myNewArray); // now set the myNewArray
  };

  return (
    <div className="App">
      <h4>Video 6 React hook challenge 2: Create a Todo List</h4>

      {myArray.map((currElem) => {
        return (
          <h1 key={currElem.id}>
            Name:{currElem.name} & Age is {currElem.age}
            <button onClick={() => removeItem(currElem.id)}>remove</button>
          </h1>
        );
      })}
      <button onClick={() => clearArray()}>clear the Array</button>
    </div>
  );
};

export default TodoListChallenge;
