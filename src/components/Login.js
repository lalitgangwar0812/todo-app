// src/components/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase';  // Import auth from firebase.js
import { signInWithEmailAndPassword } from 'firebase/auth';  // Firebase method for signing in

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Log in the user
      await signInWithEmailAndPassword(auth, email, password);
      alert("User logged in successfully!");
    } catch (error) {
      setError(error.message);  // Show any error message
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      {error && <p>{error}</p>}  {/* Display error if there is one */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
