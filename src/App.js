import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import React from "react";

function App() {
  const [value, setValue] = React.useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDeccrement = () => {
    setValue(value - 1);
  };
  return (
    <div className="App">
      <div>
        {""}
        <div className="increment">
          ini increment <Increment onClick={handleIncrement} />
        </div>
        <div className="increment">
          ini decrement <Decrement onClick={handleDeccrement} />
        </div>
      </div>
      <h1>value = {value}</h1>
    </div>
  );
}

export default App;
