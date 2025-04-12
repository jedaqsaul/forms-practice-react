import React from "react";

function Form({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Enter student Info</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
