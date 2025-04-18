// src/components/Signup.js
import React, { useState } from 'react';
import { auth } from '../firebase';  // Import the auth instance from firebase.js
import { createUserWithEmailAndPassword } from 'firebase/auth';  // Firebase method for creating a user

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Register the user
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
    } catch (error) {
      setError(error.message);  // Show any error
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
