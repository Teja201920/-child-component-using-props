import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <h1>Experiment 3: Props Example</h1>
      {/* Passing data from parent to child */}
      <Greeting name="Tejaswarrao" message="Welcome to learning React props!" />
      <Greeting name="Centurion Blockchain Club" message="Happy coding with React!" />
    </div>
  );
}

export default App;
