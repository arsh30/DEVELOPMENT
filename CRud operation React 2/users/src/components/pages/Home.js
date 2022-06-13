import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useResolvedPath } from "react-router-dom";

function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:3003/users");
    // console.log(res.data);

    //to show the data on home page
    setUser(res.data);
  };

  const deleteUser = async (id) => {
    axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2>Home</h2>

        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>

                  <td>
                    <Link to="" className="btn btn-primary mr-2">
                      {" "}
                      View
                    </Link>
                    <Link
                      to={`/users/edit/${user.id}`}
                      className="btn btn-outline-primary mr-2"
                    >
                      Edit
                    </Link>
                    <Link
                      to=""
                      className="btn btn-danger mr-2 "
                      onClick={() => deleteUser(user.id)}
                    >
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
}

export default Home;
