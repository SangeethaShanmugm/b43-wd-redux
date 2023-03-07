import React, { useEffect, useState } from "react";

const data = {
  data: [
    {
      id: "1",
      type: "car",
      brand: {
        model: "BMW1",
        year: 2020,
      },
    },
    {
      id: "2",
      type: "car",
      brand: {
        model: "BMW2",
        year: 2021,
      },
    },
    {
      id: "3",
      type: "car",
      brand: {
        model: "BMW3",
        year: 2021,
      },
    },
  ],
};

console.log(data.data.length);
function Example3() {
  return (
    <div>
      <h1>Data</h1>
      {data.data.map((item) => {
        return (
          <>
            <h4>{item.id}</h4>
            <div>{item.brand.model}</div>
            <div>{item.brand.year}</div>
          </>
        );
      })}
      <Timer />
    </div>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 3000);
  }, []);

  return <h1>I have updated {count} times</h1>;
}

export default Example3;
