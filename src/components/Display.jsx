import React from "react";

export default function Display({ submittedData }) {
  return (
    <div className="display">
      <h2>Submitted Info</h2>
      {submittedData ? (
        <div>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Phone:</strong> {submittedData.phone}
          </p>
        </div>
      ) : (
        <p> No data submitted yet</p>
      )}
    </div>
  );
}
