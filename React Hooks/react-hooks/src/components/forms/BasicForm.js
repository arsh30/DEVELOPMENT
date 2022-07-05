// import React from "react";
import { useState } from "react";
import "../../App.css";

// const BasicForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [allEntry, setAllEntry] = useState([]);
//   const submitForm = (e) => {
//     e.preventDefault();
//     // so jo email or password pr agr click kre to uspr click krega usko store krna hai
//     const newEntry = { email: email, password: password }; //password or email agr direct agr pass krte hai  to vo nhi krna chiaye
//     // because we dont want agr kal ko email ya password ke sth kuch hoje to vo direct idr state me reflect hoje.
//     // so ik new variable me store krke rakhege

//     setAllEntry([...allEntry, newEntry]);
//     console.log(allEntry);
//   };
//   return (
//     <div className="App">
//       <h3>Form in React</h3>
//       <form action="" onSubmit={submitForm}>
//         <div>
//           <label htmlFor="email">Email: </label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             value={email}
//             autoComplete="off"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {/* Note: whenevr we take input field we always take the value variable
//           abhi hum kuch bhi likhre hai value me to vo show nii hora so usko kahin store krwaenge so we have useState hook
//           */}
//         </div>
//         <div>
//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             autoComplete="off"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//       <div>
//         {allEntry.map((items, index, currArr) => {
//           return (
//             <div>
//               <p>{items.email}</p>
//               <p>{items.password}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// --------- REPEAT ------------------
import React from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password }; // key : value is usesState wali
    setAllEntry([...allEntry, newEntry]); // sirf  user ne email or password store kra vohi nhi jo sare user hai vo bhi show hone chiaye
    console.log(allEntry);
  };
  return (
    <div className="App">
      <h3>Welcome to login form</h3>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            placeholder="Enter your Email.."
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Enter your Password.."
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <div>
        {allEntry.map((elem) => {
          return (
            <div>
              <p>{elem.email}</p>
              <p>{elem.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// Note: in input fields important attributes are: name, id, value
// autoComplete -> off meaning hum ni chahte ki jo user ne typpe kra hai udr automatically suggestion aje
/*
  <input
            type="password"
            placeholder="Enter your Password.."
            name="password"
            id="password"
            autoComplete="off"
          />

    after this we want ki jo bhi hum type kre, jo type krre hai usko kahin or store krna pdhega so we have useState hook
   
    -> we have value attribute in input which is very imp "onChange event -> which is used when we type anything"
    
    -> Now we we want ki user login krta hai, to usko kahin store krke rakhna hai. so ik array lenge jidr store krke rakhlnge
        which is state variable taki udr store krke rakh ske

    -> jabhi login par click hoga tab hame email or password ko store krna hai and usko show krna niche
      so sabse pehle we need ki user ne kya likha hai email or  password me  uski value chaiye to vo email or password me milri hai already
      so usko bss new entry me store krke rakhna hai

      const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password }; // key : value is usesState wali
    setAllEntry([...allEntry, newEntry]); // sirf  user ne email or password store kra vohi nhi jo sare user hai vo bhi show hone chiaye
  };

  -> atlast -> bss hmko jo hai loop lgakr all entry vo print krni hai
*/

export default BasicForm;
