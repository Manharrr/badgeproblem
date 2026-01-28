import React from "react"
import {useState} from "react"
    
export default function Appp()  {

    const[text,setText]=useState("")
    const[list,setList]=useState([])////////////////////////
    const[deleted,setDeleted]=useState([])
    const [completed,setcompleted]=useState([])
    const[edit,setedit]=useState(null)

    const[search,setsearch]=useState("")
    
    const addfunction=()=>{
        if(!text.trim())return;

        if (edit) {
            setList(
                list.map(todo=>todo.id === edit?{...todo,text:text}:todo))
           setedit(null);
            
        }else
        
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
    const edittt=(item)=>{
        
        setText(item.text);
        setedit(item.id)
    }
    const filtereddata=list.filter(item=>
        item.text.toLowerCase().includes(search.toLowerCase() ))
    
  return (
<div>
    <h1>todoooooooooooo</h1>
    
    <input type="text" placeholder="enter todo..." value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={addfunction}>submit</button>

    <h1>task</h1>
       <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeHolder="search taskkk"></input>
    {filtereddata.map((item)=>(
    <li key={item.id}>{item.text}
        <button onClick={()=>handledelete(item)}>add to pending</button>
        <button   onClick={()=>edittt(item)}>edit</button>
     
    </li>
    ))}
    <h1> pending   task</h1>
    {deleted.map((item)=>(
    <li key={item.id}>{item.text}
    <button onClick={()=>undooo(item)}>undo</button>
    <button  onClick={()=>completedtask(item)}>completed</button></li>

    ))}
    <h3>completed task</h3>
    {completed.map(item=>(
    <li key={item.id}>{item.text}</li>
    ))}
    
</div>
  );
      }



      