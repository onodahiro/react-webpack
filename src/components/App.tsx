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
      <span className={classes.value}>
        {count}
      </span>
      <button
        className={classes.button}
        onClick={() => setCount(c => c + 1)}
      >increment</button>
    </div>
  );
}
