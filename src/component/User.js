import { useState } from "react";
const User = ({ name }) => {
    const[count, setCount] = useState(100);
  return (
    <div className="user-card">
        <h1>count :  {count}</h1>

        <button onClick={() => setCount((prev) => prev + 1) }>
            Click Me
        </button>
      <h2> Name : {name}</h2>
      <h3> Location : Bengaluru </h3>
      <h4> Email : @ritu</h4>
    </div>
  );
};

export default User;
