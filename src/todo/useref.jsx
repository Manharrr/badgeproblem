// import React, { useRef, useState } from "react";

// function Apppp() {
//   const countRef = useRef(0);
//   const [state, setState] = useState(0);

//   countRef.current += 1;

//   return (
//     <div>
//       <p>Component rendered: {countRef.current} times</p>
//       <button onClick={() => setState(state + 1)}>
//         Re-render
//       </button>
//     </div>
//   );
// }

// export default Apppp;







import React, { useRef } from "react";

function Apppp() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type something" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Apppp;







// import React, { useRef } from "react";

// function Apppp() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input  ref={inputRef} placeholder="Type something" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// export default Apppp;
