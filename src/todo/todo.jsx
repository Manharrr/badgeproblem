
import React, { useState } from 'react'

function Todo() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]); 
    const [deleted, setDeleted] = useState([]);

    const [id, setId] = useState(null);
    const [count,setCount]=useState(0)

    const handleSubmit = () => {
        if (!text.trim()) return;
        if (id) {
            setList(list.map((t) => (t.id == id ? { ...t, text: text } :t)))
            setText(""); 
            setId(null);
            return
        }
        
        setList([...list,
             { id: Date.now(), 
                text: text,
                 color: "black" }])
        setText("");
    }


    const handleDelete = (item) => {
        setList(list.filter((t) => t.id !== item.id))
        setDeleted([...deleted, item])
    }


    const handleUndo = (item) => {
        setDeleted(deleted.filter((todo) => todo.id !== item.id))
        setList([...list, { ...item, color: "red" }])
    }

    const handleEdit = (item) => {
        setText(item.text);
        setId(item.id); 
    }


    return (
        <div>
            <h1> todoooooooooo</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSubmit}>adddd</button>
            <div>
                <h3>todolist:</h3>
                <ul>
                    {list.map((item, index) => (<li key={index} style={{ color: item.color }}>{item.text}
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item)}>Delete</button>
                        </li>))}
                </ul>
            </div>

            <div >
                <h3>Deleted todo task:<button onClick={()=>(count?setCount(0):setCount(1))}>{count?"Hide":"Show"}</button></h3>
                {count?<ul>
                    {deleted.map((item, index) => (<li key={index}>{item.text}
                        <button onClick={() => handleUndo(item)}>Undo</button></li>))}
                </ul>:null}
            </div>

        </div>
    )
}

export default Todo




