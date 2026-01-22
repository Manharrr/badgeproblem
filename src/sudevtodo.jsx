import React, { useState } from 'react'

function Training() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);
    const [pending, setPending] = useState([]);
    const [final, setFinal] = useState([]);

    const handleSubmit = () => {
        if (!task.trim()) return
        setItems(prev => [...prev, { id: Date.now(), text: task }]);
        setTask("");
    }

    const handlePending = (todo) => {
        setItems(items.filter(item => item.id !== todo.id));
        setPending(prev => [...prev, todo])
    }

    const handleUndo = (todo) => {
        setPending(pending.filter(pend => pend.id !== todo.id))
        setItems(prev => [...prev, todo])
    }

    const handleComplete = (todo) => {
        setPending(pending.filter(pend => pend.id !== todo.id))
        setFinal(prev => [...prev, todo])
    }


    return (
        <div>
            <div>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
                <h2>Tasks:</h2>
                <ul>
                    {items.map((item) => <li key={item.id}>{item.text}
                        <button onClick={() => handlePending(item)}>Add to pending</button>
                    </li>)}
                </ul>
            </div>
            <div>
                <h2>Pending tasks:</h2>
                <ul>
                    {pending.map((pend) => <li key={pend.id}>{pend.text}
                        <button onClick={() => handleUndo(pend)}>Undo</button>
                        <button onClick={() => handleComplete(pend)}>Add to completed</button>
                    </li>)}
                </ul>
            </div>
            <div>
                <h2>Completed tasks:</h2>
                <ul>
                    {final.map((comp) => <li key={comp.id}>{comp.text}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Training



// import React, { useState } from 'react'

// function Training() {
//     const [text,setText]=useState("")
//     const[list,setlist]=useState([])
//     const[pending,setpending]=useState([])

//     const submit=()=>{
//         if(!text.trim())return;
//         setlist([...list,{text:text,id:Date.now()}])
//         setText("")
//     }

//     const pendingtask=()=>{
//         setlist()

//     }



//   return (
//     <div>
//         <input type="text" placeholder='enter taskkk' value={text}onChange={(e)=>setText(e.target.value)} />

//         <button onClick={submit}>addtodo</button>
//         <h1>taskkk:-</h1>
// <ul>
//         {list.map((item,index)=>(
//             <li key={index}>{item.text}
//             <button >add to pending</button>
//             </li>
//         ))}
//  </ul>

//  <h1>pending taskk:-</h1>

//  {pending.map}
      
//     </div>
//   )
// }

// export default Training
