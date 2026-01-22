import React, { useEffect, useState } from 'react'
import axios from "axios"

function Axios() {
    const [data,setData]=useState([]);

    const[deleted,setdeleted]=useState([])
    const[text,settext]=useState("");

    useEffect(()=>{
        axios.get("http://localhost:4000/users")
        .then(res=>setData(res.data))
         .catch(err => console.log(err));
    },[]);

    const deletedata=(id)=>{
      setData(data.filter(item=>item.id!==id))
      setdeleted(prev=>[...prev,deleted]);

    }
  return (
    <div>

      <input type="text" placeholder='enter text' value={text}onChange={(e)=>settext(e.target.value)} />
     

        {data.map(item=>(
            <p key={item.id}>{item.name}
            <button onClick={()=>deletedata(item.id)} >delete</button></p>
        ))}

        <h1>deleted names</h1>
        {deleted.map(item=>(
          <li key={item.id}>{item.name}</li>
        ))}

        

      
    </div>
  )
}

export default Axios


