import React from "react"
import {useState} from "react"
    
export default function App()  {

    const[text,setText]=useState("")
    const[list,setList]=useState([])
    const[deleted,setDeleted]=useState([])

    const [completed,setcompleted]=useState([])
    
    const addfunction=()=>{
        if(!text.trim())return;
        setList(prev=>[...prev,{text:text,id:Date.now()}])
        setText("")
    } 
    const handledelete=(item)=>{
        setList(list.filter(todo=>(todo.id!==item.id)))
        setDeleted([...deleted,item])
    }
    const undooo=(item)=>{
        setDeleted(deleted.filter(todo=>(todo.id!==item.id)))
        setList([item,...list]) 
    }
    const completedtask=(item)=>{
        setDeleted(deleted.filter(todo=>todo.id!==item.id))
        setcompleted([item,...completed])
        
        
    }
    
  return (
<div>
    <h1>todo</h1>
    
    <input type="text" placeholder="enter todo..." value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={addfunction}>submittt</button>

    <h1>taskkk</h1>
    {list.map((item)=>(
    <li key={item.id}>{item.text}
        <button onClick={()=>handledelete(item)}>delete</button>
    </li>
    ))}
    <h1> pendingggg   task</h1>
    {deleted.map((item)=>(
    <li key={item.id}>{item.text}
    <button onClick={()=>undooo(item)}>undoooooooooo</button>
    <button  onClick={()=>completedtask(item)}>completeddd</button></li>

    ))}
    <h3>completeddddtask</h3>
    {completed.map(item=>(
    <li key={item.id}>{item.text}</li>
    ))}
    
</div>
  );
      }
