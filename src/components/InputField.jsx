import React, {useState}  from "react";

function InputField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  min,
  minLength,
  validated,
}) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className={`form-control${validated && required && !value ? " is-invalid" : ""}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        minLength={minLength}
      />
      <div className="invalid-feedback">
        {name === "email" && "Please enter a valid email address."}
        {name === "password" && "Password must be at least 6 characters."}
        {name === "age" && "Please enter your age."}
        {name === "firstName" && "First name is required."}
        {name === "lastName" && "Last name is required."}
      </div>
    </div>
  );
}

export default InputField;