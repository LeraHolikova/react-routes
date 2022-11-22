import React, {useState} from "react";
import Product from "./Product";

function App(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
  setCount((prevState) => prevState - 1)
  };

  return (
    <div>
      <Product name="Laptop" price={50} />
      <Product name="Phone" price={30} />
      <p>The count is: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
