import React from "react";

function App(props) {
  return (
    <p style={{ color: "red", borderBottom: "1px solid red" }}>
      Hello {props.name}
    </p>
  );
}

export default App;
