import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  // review
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="container">
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Display submittedData={submittedData} />
    </div>
  );
}

export default App;
