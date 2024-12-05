import React from "react";

const HooksTutorial = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#2c3e50" }}>React Hooks Tutorial</h1>
        <p style={{ fontSize: "18px", color: "#7f8c8d" }}>
          Learn how to use React Hooks for functional components.
        </p>
      </header>

      <section>
        <h2 style={{ color: "#2980b9" }}>What are Hooks?</h2>
        <p>
          Hooks are functions that let you use state and other React features in 
          functional components. They were introduced in React 16.8 to simplify 
          state and lifecycle management without using class components.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#e67e22" }}>Why Use Hooks?</h2>
        <ul>
          <li>Eliminate the need for class components.</li>
          <li>Improve readability and maintainability of code.</li>
          <li>Enable the reuse of stateful logic through custom hooks.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#16a085" }}>Key React Hooks</h2>
        <article style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "#3498db" }}>1. useState</h3>
          <p>
            The `useState` hook allows you to add state to functional components.
          </p>
          <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
          </pre>
        </article>

        <article style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "#3498db" }}>2. useEffect</h3>
          <p>
            The `useEffect` hook lets you perform side effects in functional components, such as fetching data or directly interacting with the DOM.
          </p>
          <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`import React, { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <p>Time: {time}s</p>;
}`}
          </pre>
        </article>

        <article style={{ marginBottom: "20px" }}>
          <h3 style={{ color: "#3498db" }}>3. useContext</h3>
          <p>
            The `useContext` hook provides a way to access React's Context API directly in functional components.
          </p>
          <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemeDisplay() {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
}`}
          </pre>
        </article>
      </section>

      <section>
        <h2 style={{ color: "#8e44ad" }}>Other Common Hooks</h2>
        <ul>
          <li><strong>useReducer:</strong> An alternative to `useState` for complex state logic.</li>
          <li><strong>useMemo:</strong> Optimizes expensive calculations by memoizing their results.</li>
          <li><strong>useRef:</strong> Provides a mutable reference to store a DOM node or any value.</li>
          <li><strong>useCallback:</strong> Memoizes callback functions to prevent unnecessary re-renders.</li>
        </ul>
      </section>

      <footer style={{ marginTop: "40px", textAlign: "center", color: "#95a5a6" }}>
        <p>
          Mastering hooks will transform the way you build React applications. For further details, check the <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer" style={{ color: "#3498db" }}>React Hooks Documentation</a>.
        </p>
      </footer>
    </div>
  );
};

export default HooksTutorial;
