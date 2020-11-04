import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);

  let now = new Date().toLocaleTimeString();
  console.log(now);

  const [time, setTime] = useState(now);
  console.log(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
