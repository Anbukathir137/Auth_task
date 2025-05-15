import React from "react";

function SubmitButton({ label = "Submit", className = "btn btn-primary", ...props }) {
  return (
    <button type="submit" className={className} {...props}>
      {label}
    </button>
  );
}

export default SubmitButton;
