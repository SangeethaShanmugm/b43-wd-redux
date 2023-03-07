import React, { useState } from "react";

function Example() {
  const [color, setColor] = useState(["red", "green", "purple"]);
  return (
    <div>
      {color.map((clr) => (
        <h1>My favourite color is {clr}</h1>
      ))}

      <button onClick={() => setColor([...color, "pink"])}>
        Click Me to change color
      </button>
    </div>
  );
}

export default Example;
