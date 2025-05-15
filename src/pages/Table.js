import React from "react";

const users = [
  { firstname: "John", lastname: "Doe", email: "john.doe@example.com", age: 28 },
  { firstname: "Jane", lastname: "Smith", email: "jane.smith@example.com", age: 34 },
  { firstname: "Alice", lastname: "Johnson", email: "alice.johnson@example.com", age: 22 },
];

function UserTable() {
  return (
    <div className="container my-5">
        <div className="text-center">
            <h4>User Details</h4>
        </div>
        <div className="card p-2" >
            <table className="table table-bordered text-center table-striped">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, idx) => (
                    <tr key={idx}>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      
    </div>
  );
}

export default UserTable;
