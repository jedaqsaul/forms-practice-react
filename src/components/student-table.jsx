import React from "react";

export default function StudentTable({ data }) {
  return (
    <div>
      <h2>Student Table</h2>
      <table
        border="1"
        cellPadding={"10"}
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
