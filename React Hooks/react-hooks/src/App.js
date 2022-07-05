import "./App.css";
import { useState } from "react";

/*
function App() {
  const [name, setName] = useState("Arshdeep");
  const changeName = () => {
    setName("Arshdeep Singh");
  }
  return (
    <div className="App">
      <h4>1st video about useState hook</h4>
      <h2>{name}</h2>
      <button onClick={() => changeName()}>Update Name</button>
    </div>
  );
}
*/

// ----------------------

/*
import React from "react";
const App = () => {
  const [name, setName] = useState("Arshdeep Singh");
  const updateName = () => {
    let val = name;
    if (val === "Arshdeep Singh") {
      setName("Arshdeep Singh Nagi"); //Note: jb isme updated value put krte hai to bydefault name vale me updated value hoti hai
    } else {
      setName("Arshdeep Singh");
    }
  };
  return (
    <div className="App">
      <h4>2nd video Hooks! - ie challenge 1</h4>
      <h2>{name}</h2>
      <button onClick={() => updateName()}>Update Name</button>
    </div>
  );
};

export default App;
*/

// --------------------------------------------

// import React from "react";
// import UseStateArray from "./components/UseStateArray";

// const App = () => {
//   return (
//     <div className="App">
//       <h4>video - 4 How to work with Array Using UseState hook!!</h4>
//       <UseStateArray />
//     </div>
//   );
// };

// =========================================

// import React from "react";
// import UseStateObject from "./components/UseStateObject";

// function App() {
//   return (
//     <div className="App">
//       <h1>Video 5 USESTATE HOOK WITHOBJECT AND SPREAD OPERATOR [UPDATE]</h1>
//       <UseStateObject/>
//     </div>
//   );
// }

// =============================================

// import React from "react";
// import TodoListChallenge from "./components/TodoListChallenge";

// export const App = () => {
//   return (
//     <div>
//       <h1>Video 6 react hook challenge 2: ToDo List</h1>
//       <TodoListChallenge/>
//     </div>
//   )
// }

// ==========================================================

// import React from "react";
// import ShortCircuitEvaluation from "./components/ShortCircuitEvaluation";

// const App = () => {
//   return (
//     <div>
//       <h1>Video 7 or 8: Short circuit Evaluation</h1>
//       <ShortCircuitEvaluation />
//     </div>
//   );
// };

// ==========================================================

// import React from 'react'
// import BasicForm from "./components/forms/BasicForm";

// const App = () => {
//   return (
//     <div>
//       <h1>Video 9 : LOGIN FORM</h1>
//       <BasicForm/>

//     </div>
//   )
// }

// ===========================================================

// import React from "react";

// import FormValidation from "./components/forms/FormValidation";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Video 10 : LOGIN FORM - FORM VALIDATION</h1>
//       <FormValidation />
//     </div>
//   );
// };

// ==============================================================

// import React from "react";
// import UseEffects from "./components/useEffect/UseEffects";

// const App = () => {
//   return (
//     <div className="App">
//       <h2>Video 11 - 12 UseEFFECT hook</h2>
//       <UseEffects />
//     </div>
//   );
// };

// ==============================================================

// import React from "react";
// import UseEffectChallenge3 from "./components/useEffect/UseEffectChallenge3";

// const App = () => {
//   return (
//     <div className="App">
//       <h2>video 13: React UseEffect hook challenge 3</h2>
//       <UseEffectChallenge3 />
//     </div>
//   );
// };


// ===============================================================

import React from 'react'
import DependencyListInUseEffect from "./components/useEffect/DependencyListInUseEffect";

const App = () => {
  return (
    <div className="App">
      <h3>Video 14 Dependency List In UseEffect</h3>
      <DependencyListInUseEffect />
    </div>
  );
}


export default App;
