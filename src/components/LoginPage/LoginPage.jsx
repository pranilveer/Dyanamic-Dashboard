import React from 'react';

function LoginPage({ onLogin }) {
  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    } else {
      console.error('onLogin function not provided');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;