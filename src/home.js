import React from "react";
import Carousels from "./carousel";

const HomePage = () => {
  return (
    <div className="p-5">
    <Carousels/>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#2c3e50" }}>React Tutorial</h1>
        <p style={{ fontSize: "18px", color: "#7f8c8d" }}>
          A comprehensive guide from basics to intermediate level.
        </p>
      </header>

      <section>
        <h2 style={{ color: "#2980b9" }}>1. Introduction to React</h2>
        <p>
          React is a popular JavaScript library for building user interfaces. 
          It allows developers to create reusable UI components and manage application state efficiently.
        </p>
        <ul>
          <li>What is React?</li>
          <li>Why React is popular</li>
          <li>React vs other frameworks</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#e67e22" }}>2. Getting Started</h2>
        <p>
          Learn how to set up a React project and build your first React application.
        </p>
        <ul>
          <li>Installing Node.js and npm</li>
          <li>Setting up a React project with Create React App</li>
          <li>Understanding the project structure</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#16a085" }}>3. Core Concepts</h2>
        <p>
          Understand the fundamental concepts that power React applications.
        </p>
        <ul>
          <li>JSX - Writing HTML in JavaScript</li>
          <li>Components - Building blocks of a React app</li>
          <li>Props and State - Data handling in React</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#8e44ad" }}>4. Intermediate Topics</h2>
        <p>
          Take your React skills to the next level with these intermediate topics.
        </p>
        <ul>
          <li>Lifecycle methods and Hooks</li>
          <li>React Router for navigation</li>
          <li>State management with Context API</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#c0392b" }}>5. Useful Tools and Libraries</h2>
        <p>
          Explore tools and libraries to enhance your React development experience.
        </p>
        <ul>
          <li>Redux for state management</li>
          <li>Next.js for server-side rendering</li>
          <li>Styled-components for styling</li>
        </ul>
      </section>

      <footer style={{ marginTop: "40px", textAlign: "center", color: "#95a5a6" }}>
        <p>
          Happy Coding! <br />
          For more information, visit the <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={{ color: "#3498db" }}>official React documentation</a>.
        </p>
      </footer>
    </div>
    </div>
  );
};

export default HomePage;
