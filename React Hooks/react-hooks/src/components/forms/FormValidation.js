import React, { useState } from "react";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      //4th validation
      const newEntry = {
        id: new Date().getTime().toString(), // this is used to generate a unique key, 2nd validation
        email: email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);

      setEmail(""); // 1st valiation
      setPassword("");
    } else {
      alert("Enter your email and Password");
    }
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
          {
            /* 3rd validation is object destructuring */
          }
          const { id, email, password } = elem;
          return (
            <div key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
        {/* <div key={elem.id}>
              <p>{elem.email}</p>
              <p>{elem.password}</p>
            </div> */}
      </div>
    </div>
  );
};

export default FormValidation;
