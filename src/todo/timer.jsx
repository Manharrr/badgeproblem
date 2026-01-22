import React, { useEffect, useState } from "react";

function Page4() {
    const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setCount(prev => (forward ? prev + 1 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [running, forward]);

// const reset=()=>{
//     setCount(count*0)
// }

  return (
    <div> 
      {/* <h1>Timer</h1> */}

      <div>{count}</div>

      <button
        onClick={() => {setForward(true), setRunning(true)}} > Forward</button>

      <button onClick={() => setRunning(false)}>Stop</button>

{/* <button onClick={reset}>clear</button> */}

      <button onClick={() => {setForward(false);setRunning(true); }} > Backward</button>
    </div>
  );
}

export default Page4;
