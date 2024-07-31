import React from "react";

import classes from './App.module.scss';

export const App = () => {
  const [count, setCount] = React.useState<number>(0)
  console.log(classes);

  return (
    <div>
      <div>
        {'Hello World'}
      </div>
      {count}
      <button
        className={classes.button}
        onClick={() => setCount(c => c + 1)}
      >increment</button>
    </div>
  );
}
