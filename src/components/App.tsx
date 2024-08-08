import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import classes from './App.module.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);

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
      <Suspense fallback="Loading...">
        <Outlet/>
      </Suspense>
    </div>
  );
}
