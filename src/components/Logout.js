// src/components/Logout.js
import React from 'react';
import { auth } from '../firebase';  // Import auth from firebase.js
import { signOut } from 'firebase/auth';  // Firebase method for signing out

function Logout() {
  const handleLogout = async () => {
    try {
      // Log out the user
      await signOut(auth);
      alert("User logged out successfully!");
    } catch (error) {
      console.error(error.message);  // Log any error
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
}

export default Logout;
