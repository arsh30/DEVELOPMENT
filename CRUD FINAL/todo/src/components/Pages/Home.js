import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log("users", users);
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:3003/users");
    // console.log(res.data);
    setUsers(res.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>Home component</h2>

        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to="" class="btn btn-primary mr-2">
                      View
                    </Link>
                    <Link to="" class="btn btn-outline-primary mr-2">
                      Edit
                    </Link>
                    <Link to="" class="btn btn-danger">
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
