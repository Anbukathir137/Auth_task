import React, { useState } from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/button";
import UserTable from "./Table"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fields = [
  { name: "email", label: "Email", type: "email", required: true },
  { name: "password", label: "Password", type: "password", required: true, minLength: 6 }
];

function LoginFrm({ onShowSignup }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      const response = await fetch("http://localhost:8001/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.token); 
        toast.success("Login successful!");
        setTimeout(() => setIsLoggedIn(true), 1000); // redirect after toast
      } else if (response.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn) return <UserTable />;

  return (
    <div className="container d-flex justify-content-center mt-5">
      <ToastContainer />
      <div className="card col-md-6 p-5">
        <h2 className="text-center">Login</h2>
        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
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
          <div className="row">
            <div className="col-md d-flex justify-content-center">
              <SubmitButton label={loading ? "Logging in..." : "Login"} disabled={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFrm;
