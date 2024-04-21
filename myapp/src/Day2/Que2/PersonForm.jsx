// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import React, { useState } from "react";
import "./Form.css";

function PersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      <div>
        <label htmlFor="name">First Name</label>
        <input
          className="fields"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastname">Last Name</label>
        <input
          className="fields"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name">Age</label>
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          className="fields"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <button onClick={() => setSubmit(true)}>Submit </button>

      {submit && (
        <div>
          {" "}
          FirstName: {firstName} <br /> LastName: {lastName} <br /> Age: {age}{" "}
        </div>
      )}
    </div>
  );
}

export default PersonForm;
