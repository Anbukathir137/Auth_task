import React, { useState } from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/button";

const fields = [
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true, minLength: 6 }
];
function LoginFrm({ onShowSignup }) {
    const [form, setForm] = useState({
        email: '',
        password: '',
      });
    const [validated, setValidated] = useState(false);


    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log('validated',validated);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    if (formEl.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log('Form submitted with values:', form);
      alert('Login successful!');
    }
    setValidated(true);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card col-md-6 p-5">
        <h2 className="text-center">Login</h2>
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
                Don't have an account?{" "}
                <button
                  type="button"
                  className="btn btn-link p-0"
                  onClick={onShowSignup}
                  style={{ textDecoration: "underline" }}
                >
                  Signup
                </button>
              </p>
            </div>
          </div>
          <div className="row" >
            <div className="col-md d-flex justify-content-center" >
                <SubmitButton label="Login"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFrm;