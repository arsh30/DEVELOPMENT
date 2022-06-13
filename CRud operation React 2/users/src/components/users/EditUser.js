import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = user;

  const { id } = useParams();
  // alert(id);

  const onInputChange = (e) => {
    //   console.log(e.target.value);  hum chahte hai ki value print ho display pr
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`); // idr hum btana pdhega ki konse user ka chaiye so we do dynamic routing
    // jo parameter aarahai after putting the route in app.js, then we have to use the hook useParams

    //idr se data aara hai usko store user hook because it is already exist
    setUser(result.data);

    // console.log(result);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user); // 2nd parameter is kya data bhjre hai hum user bhjre hai state, and here is the change enter put request
  };

  return (
    <div className="container">
      <h2>Add User</h2>

      <form onSubmit={(e) => onSubmit(e)}>
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

        <button type="submit" class="btn btn-warning btn-block">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
