import React, { useState } from "react";

const  Box= () => {
  const totalBox = 5;
  const [activeBoxes, setActiveBoxes] = useState([]);//box store cheyyum
  const [locking, setLocking] = useState(false);

  const handleClick = (index) => {
    if (locking) return;
    if (activeBoxes.includes(index)) return;

    const updated = [...activeBoxes, index];//New box index array-il add cheyyunnu State update cheyyunnu
    setActiveBoxes(updated);

    if (index === totalBox - 1) {//Last box (index 4) click cheythaal reverse animation start cheyyum
      reverseBoxes(updated);
    }
  };

  const reverseBoxes = (arr) => {
    setLocking(true);//clicks lock cheyyunnu
    let stack = [...arr]; //stack temporary variable

    const timer = setInterval(() => {
      stack.shift();
      setActiveBoxes([...stack]);

      if (stack.length === 0) {
        clearInterval(timer);
        setLocking(false);
      }
    }, 300);//300ms delay-il code repeat cheyyum
  };

  const container = {
    display: "flex",
    width: "fit-content",
    gap: "50px",
    border: "5px solid black",
    padding: "10px"
  };

  const smallBox = {
    width: "50px",
    height: "50px",
    border: "1px solid black",
    cursor: "pointer"
  };

  return (
    <div style={container}>
      {Array.from({ length: totalBox }).map((_, index) => (
        <div
          key={index}//Each box-inu unique key
          onClick={() => handleClick(index)}//Click cheythaal handleClick call
          style={{
            ...smallBox,
            backgroundColor: activeBoxes.includes(index) ? "red" : "white"
          }}//Box active aanenkil → red //Allenkil → white
        />
      ))}
    </div>
  );
};

export default Box;