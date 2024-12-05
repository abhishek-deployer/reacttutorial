import React from "react";

const ReduxInfo = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#2c3e50" }}>Redux in React</h1>
        <p style={{ fontSize: "18px", color: "#7f8c8d" }}>
          Learn the basics of using Redux with React for state management.
        </p>
      </header>

      <section>
        <h2 style={{ color: "#2980b9" }}>What is Redux?</h2>
        <p>
          Redux is a predictable state container for JavaScript applications.
          It helps manage the application state in a centralized store, making it easier to share and manage data across the app.
        </p>
        <p>
          It is commonly used with React to handle complex state management, especially in large applications.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#e67e22" }}>Core Concepts of Redux</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li><strong>Store:</strong> The central place where the application's state is stored.</li>
          <li><strong>Actions:</strong> Plain JavaScript objects that describe what happened in the app.</li>
          <li><strong>Reducers:</strong> Functions that specify how the state changes in response to actions.</li>
          <li><strong>Dispatch:</strong> A function that sends actions to the store to modify the state.</li>
          <li><strong>Selectors:</strong> Functions that retrieve data from the state store.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#16a085" }}>How Redux Works</h2>
        <p>Redux works in the following flow:</p>
        <ul>
          <li>Actions are dispatched to the Redux store.</li>
          <li>The store processes these actions and updates the state using reducers.</li>
          <li>React components are connected to the Redux store and automatically update when the state changes.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#8e44ad" }}>Setting Up Redux in React</h2>
        <h3 style={{ color: "#3498db" }}>1. Install Redux and React-Redux</h3>
        <p>First, install Redux and React-Redux packages:</p>
       </section>
       </div>
       )}
       export default ReduxInfo
