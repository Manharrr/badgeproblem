// import React, { useState } from 'react'

// function Studytodo() {
//     const [text,setText]=useState("")
//     const[List,setList]=useState([])

//     const [deleted,setDeleted]=useState([])

//    const [edit,setEdit]=useState(null)

//     const addtodo=()=>{


//     if(!text.trim()) return;
// if (edit){
//     setList(List.map(t=>t.id===edit?{...t,text:text}:t))
//     setText("")
//     setEdit(null)
//     return
// }
        
        
//         setList([...List,{text:text,id:Date.now,color:"black"}])
//         setText("")
//     }



//     const deletetodo=(item)=>{
//         setList(List.filter(t=>t.id!== item.id))
//         setDeleted([...deleted,item])
//     }
//     const edittodo=(item)=>{
//        setText(item.text);
//        setEdit(item.id)
//     }

//     const handleundo=()=>{
//         setDeleted(deleted.filter((todo)=>todo.id !==item.id))
//         setList([...List,item])
//     }

//   return (
//     <div>
//         <input type="text" placeholder='enter todo...'
//         value={text}  onChange={(e)=>setText(e.target.value)}/>
//         <button onClick={addtodo}>addd</button>
//       <h1>task</h1>
//       <ul>
//         {List.map((item)=>(
//             <li key={item.id}>{item.text}
//             <button onClick={()=>deletetodo(item)}>delete</button>

//             <button onClick={()=>edittodo(item)}>editt</button>
//             </li>
//         ))}
//       </ul>


//       <div>
//         <h1>deleted</h1>
//         {deleted.map((item)=>(
//             <li key={item.id}>{item.text}
//             <button onClick={()=>handleundo(item)}>undo</button>
//             </li>
//         ))}

//       </div>

      
//     </div>
//   )
// }

// export default Studytodo

import React, { useState } from 'react'

function Studytodo() {
  const [text, setText] = useState("")
  const [list, setList] = useState([])
  const [deleted, setDeleted] = useState([])
  const [edit, setEdit] = useState(null)
  const [search,setsearch]=useState("")

  const addtodo = () => {
    if (!text.trim()) return;

    // EDIT MODE
    if (edit !== null) {
      setList(
        list.map(t => t.id === edit ? { ...t, text } :t))
      setText("")
      setEdit(null)
      return
    }

    // ADD MODE
    setList([...list, { text, id: Date.now() }])
    setText("")
  }

  const deletetodo = (item) => {
    setList(list.filter(t => t.id !== item.id))
    setDeleted([...deleted, item])
  }

  const edittodo = (item) => {
    setText(item.text)
    setEdit(item.id)
  }

  const handleundo = (item) => {
    setDeleted(deleted.filter(t => t.id !== item.id))//id equal ആയ item ❌ remove
    setList([...list, item]) 
  }

  const filteredtodo=list.filter(item=>(
    item.text.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <div>
      <input
        type="text"
        placeholder="enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addtodo}> {edit ? "Update" : "Add"}
      </button>

      <h1>Tasks</h1>


      <input type='text' placeholder= "searchhhh todosss"value={search} onChange={(e)=>setsearch(e.target.value)}/>


      <ul>
        {filteredtodo.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => deletetodo(item)}>Delete</button>
            <button onClick={() => edittodo(item)}>Edit</button>
          </li>
        ))}
      </ul>

      <h1>Deleted</h1>
      <ul>
        {deleted.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleundo(item)}>Undo</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Studytodo


