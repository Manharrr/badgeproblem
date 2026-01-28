// import React, {useEffect, useState } from 'react'

// function Pagination() {
//     const words = [
//   "apple", "banana", "cherry", "date", "elderberry",
//   "fig", "grape", "honeydew", "kiwi", "lemon",
//   "mango", "nectarine", "orange", "papaya", "quince",
//   "raspberry", "strawberry", "tangerine", "ugli", "watermelon"
// ];
// const [limit,setLimit]=useState(0)

// const [items,setItems]=useState(words.slice(limit,limit+5));

// useEffect(()=>{
//     setItems(words.slice(limit,limit+5))
// },[limit])


//   return (
//     <div>
//         <div>
//             <h2>Datas:</h2>
//             {items.map((item)=><li>{item}</li>)}
//             <button onClick={()=>{setLimit(prev=>prev-5)}} disabled={limit==0}>Prev</button>
//             <button onClick={()=>setLimit(prev=>prev+5)} disabled={limit+5>=words.length}>Next</button>
//         </div>
//     </div>
//   )
// }

// export default Pagination




import React, { useEffect, useState } from 'react'

function Pagination() {

      const words = [
  "apple", "banana", "cherry", "date", "elderberry",
  "fig", "grape", "honeydew", "kiwi", "lemon",
  "mango", "nectarine", "orange", "papaya", "quince",
  "raspberry", "strawberry", "tangerine", "ugli", "watermelon"
];

const[limit,setLimit]=useState(0)
const[item,setItems]=useState(words.slice(limit,limit+5))

useEffect(()=>{
  setItems(words.slice(limit,limit+5))

},[limit])
  
  return (
    <div>
      <h1>fruitssss</h1>
      {item.map((item)=>(
        <li>{item}</li>
      ))}
      
      <button onClick={()=>setLimit(prev=>prev-5)} disabled={limit===0}>Previous</button>
      <button onClick={()=>setLimit(prev=>prev+5)} disabled={limit+5>=words.length}>nexttt</button>
    </div>
  )
}

export default Pagination
