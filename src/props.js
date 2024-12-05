import React from "react";

const PropsInfo = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#2c3e50" }}>React Props</h1>
        <p style={{ fontSize: "18px", color: "#7f8c8d" }}>
          A detailed guide on the features of props in React.
        </p>
      </header>

      <section>
        <h2 style={{ color: "#2980b9" }}>What are Props?</h2>
        <p>
          Props, short for "properties," are a mechanism in React that allows you 
          to pass data from one component to another, typically from a parent to a child component.
        </p>
        <p>
          Props are read-only, meaning they cannot be modified by the receiving component.
          They help in building dynamic and reusable components.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#e67e22" }}>Features of Props</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Data Passing:</strong> Props enable communication between components by passing data.
          </li>
          <li>
            <strong>Immutable:</strong> Props are immutable, meaning they cannot be changed by the child component.
          </li>
          <li>
            <strong>Dynamic Rendering:</strong> Props allow components to render dynamically based on the received data.
          </li>
          <li>
            <strong>Reusable Components:</strong> By passing different props, you can reuse the same component with varied data.
          </li>
          <li>
            <strong>Type Checking:</strong> With libraries like PropTypes, you can enforce type-checking on props to prevent errors.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#16a085" }}>How to Use Props</h2>
        <p>
          Props are passed to components as attributes in JSX:
        </p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`<ChildComponent title="Hello World" />`}
        </pre>
        <p>
          The receiving component accesses the props via its arguments:
        </p>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
{`const ChildComponent = (props) => {
  return <h1>{props.title}</h1>;
};`}
        </pre>
      </section>

      <section>
        <h2 style={{ color: "#8e44ad" }}>Best Practices</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            Use descriptive names for props to make their purpose clear.
          </li>
          <li>
            Use default values for optional props to avoid undefined errors.
          </li>
          <li>
            Keep props simple and focused on a single responsibility.
          </li>
          <li>
            Use destructuring to access props for cleaner code.
          </li>
          <li>
            Use tools like PropTypes for type-checking and validation.
          </li>
        </ul>
      </section>

      <footer style={{ marginTop: "40px", textAlign: "center", color: "#95a5a6" }}>
        <p>
          Understanding and using props effectively is key to building dynamic and reusable components in React. 
          For more details, check the <a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noopener noreferrer" style={{ color: "#3498db" }}>official React documentation</a>.
        </p>
      </footer>
    </div>
  );
};

export default PropsInfo;
