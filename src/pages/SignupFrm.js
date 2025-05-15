// SignupFrm.js
import React, { useState } from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = [
  { name: "firstname", label: "First Name", type: "text", required: true },
  { name: "lastname", label: "Last Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "age", label: "Age", type: "number", required: true, min: 1 },
  { name: "password", label: "Password", type: "password", required: true, minLength: 6 }
];

function SignupFrm({ onShowLogin }) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    password: '',
  });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = e.currentTarget;

    if (formEl.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8001/api/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      
      if (response.status === 201) {
        toast.success("Registered successfully!");
        setForm({ firstname: '', lastname: '', email: '', age: '', password: '' });
        setValidated(false);
      
        setTimeout(() => onShowLogin(true), 1000);
      } else if (response.status === 409) {
        toast.error("Email already exists!");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <ToastContainer />
      <div className="card col-md-6 p-5">
        <h2 className="text-center">Signup</h2>
        <form
          className="needs-validation"
          noValidate
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
                If you have an account, please{" "}
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

          <div className="row">
            <div className="col-md d-flex justify-content-center">
              <SubmitButton label={loading ? "Signing Up..." : "Sign Up"} disabled={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupFrm;

