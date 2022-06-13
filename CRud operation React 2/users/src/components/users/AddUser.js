import { useState } from "react";
import React from "react";
import axios from "axios";



const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = user;

  const onInputChange = (e) => {
    //   console.log(e.target.value);  hum chahte hai ki value print ho display pr
    setUser({ ...user, [e.target.name]: e.target.value });
    //means name sabme common liya hai agr kisi pr bhi click krta hai to vo value ajegi
    //   eg: email pr click hua -> e.target.name[name ki value email hai]
    //   spread operator used because agr email pr click kra to email vali field rhegi or baki 2 remove hojegi, 
    // data store hogya hai state, now ab work is ki data ko bhjna api me 
    // we have form
  
    };
    const onSubmit = async (e) => {
        e.preventDefault();

        // data aa chuka hai
        // so hum post request bhjege
        await axios.post("http://localhost:3003/users", user);  // 2nd parameter is kya data bhjre hai hum user bhjre hai state
        
        //redirect to homepage -> so we use useHistory hook from 'react router dom'
    }

  return (
    <div className="container">
      <h2>Add User</h2>

      <form onSubmit={(e)=> onSubmit(e)}>
        <div class="mb-3">
          <input
            type="Name"
            placeholder="Enter your Name"
            class="form-control"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Enter your UserName"
            type="username"
            class="form-control"
            aria-describedby="emailHelp"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Enter your Email"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            placeholder="Enter your contact"
            type="phone"
            class="form-control"
            aria-describedby="emailHelp"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
