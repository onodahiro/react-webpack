import React from "react";

export const App = () => {

  const [count, setCount] = React.useState<number>(0)

  return (
    <div>
      <div>
        {'Hello World'}
      </div>
      {count}
      <button onClick={() => setCount(c => c + 1)}>inc</button>
    </div>
  );
}
