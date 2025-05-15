// SignupForm.js
import React, { useState } from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/button";

const fields = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "age", label: "Age", type: "number", required: true, min: 1 },
  { name: "password", label: "Password", type: "password", required: true, minLength: 6 }
];

function SignupFrm( {onShowLogin }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    password: '',
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    if (formEl.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log('Form submitted with values:', form);
      alert('Form submitted successfully!');
    }
    setValidated(true);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card col-md-6 p-5">
        <h2 className="text-center">Signup</h2>
        <form
          className="needs-validation"
          noValidate
          validated={validated.toString()}
          onSubmit={handleSubmit}
        >
          {fields.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={handleChange}
              required={field.required}
              min={field.min}
              minLength={field.minLength}
              validated={validated}
            />
          ))}

        <div className="row mb-2">
          <div className="col-md">
            <p className="text-muted">
                If you have an account, Please{" "}
                <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={onShowLogin}
                    style={{ textDecoration: "underline" }}
                >
                    Login
                </button>
            </p>
          </div>
        </div>
          <div className="row " >
            <div className="col-md d-flex justify-content-center" >
                <SubmitButton label="Sign Up"/>
            </div>
          </div>
        </form>
      
      </div>
    </div>
  );
}

export default SignupFrm;
