// src/App.js
import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; // Import Firebase auth instance
import { onAuthStateChanged } from 'firebase/auth'; // Firebase method to check user authentication state
import Signup from './components/Signup'; // Import Signup component
import Login from './components/Login';   // Import Login component
import Logout from './components/Logout'; // Import Logout component

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null); // State to track if a user is logged in

  useEffect(() => {
    // Check if a user is logged in or not
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state based on Firebase auth state
    });

    return () => unsubscribe(); // Clean up the subscription when the component unmounts
  }, []);

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>

      {user ? (
        // If user is logged in, show the todo app functionality
        <>
          <h2>Welcome, {user.email}</h2>
          <button onClick={() => setTasks([])}>Clear Tasks</button> {/* Option to clear tasks */}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addTask}>Add</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task} <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <Logout /> {/* Logout button */}
        </>
      ) : (
        // If user is not logged in, show the Login and Signup options
        <div>
          <Signup /> {/* Show Sign Up form */}
          <Login />  {/* Show Login form */}
        </div>
      )}
    </div>
  );
}

export default App;
