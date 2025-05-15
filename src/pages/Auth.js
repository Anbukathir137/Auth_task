import React, { useState } from "react";
import SignupFrm from "./SignupFrm";
import LoginForm from "./LoginFrm";

function AuthPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? (
        <LoginForm onShowSignup={() => setShowLogin(false)} />
      ) : (
        <SignupFrm onShowLogin={() => setShowLogin(true)} />
      )}
    </>
  );
}

export default AuthPage;
