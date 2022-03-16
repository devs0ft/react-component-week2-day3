import React from "react";

export const Counter = () => {
  const [value, setvalue] = React.useState(0);

  const handleIncrease = () => {
    setvalue((prevValue) => {
      return prevValue + 1;
    });
  };
  return (
    <div>
      <h1>value</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};
