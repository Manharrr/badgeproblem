// import React, { useEffect, useState } from 'react'

// function TrafficLight() {
//     const lights = [
//         { color: "red", delay: 1000 },
//         { color: "yellow", delay: 1000 },
//         { color: "green", delay: 1000 }
//     ];
//     const [bright, setBright] = useState(0);//red light
//     const [start, setstart] = useState(false); //initally off light

   

//     useEffect(() => {
//         if (!start) return;//Start button click cheythillenkil interval start aavilla
//         const interval = setInterval(() => {
//             setBright(prev => (prev + 1) % lights.length)//last kazhinju thirich first-il varum
//         }, lights[bright].delay)//delay time set cheyyan
//         return () => clearInterval(interval);
//     }, [start])

//     return (
//         <div>
//             <div style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 backgroundColor: "black",
//                 width: "200px",
//                 height: "500px",
//                 justifyContent: 'space-around',
//                 alignItems: 'center'
//             }}>
//                 {lights.map((light, index) => (
//                     <div style={{
//                         backgroundColor: light.color,
//                         width: "100px",
//                         height: "100px",
//                         borderRadius: 100,
//                         opacity: bright == index ? 1 : 0.2
//                     }}>

//                     </div>))}
               
                   
//             </div>
//             {/* <button onClick={() => setstart(prev => !prev)}>{start ? "Stop" : "Start"}</button> */}
//             <button onClick={()=>setstart(true)}>statrttt</button>
//             <button onClick={()=>setstart(false)}>stopp</button>
//         </div>
//     )
// }
// export default TrafficLight






import React, { useEffect, useState } from 'react'

function TrafficLight() {
const light=[ 
    {color:"red",delay:1000},
    {color:"yellow", delay:2000},
    {color:"green",delay:4000}
]
const [bright,setbright]=useState(0)
const [start,setstart]=useState(false)

useEffect(()=>{
    if(!start)return; 
    const interval=setInterval(()=>{
        setbright((prev)=>(prev+1)% light.length)
    },light[bright].delay)

    return()=>clearInterval(interval)
},[start,bright])

  return (
    <div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            backgroundColor:"black",
            height:"500px",
            width:"200px",
            alignItems:'center',
            justifyContent:'space-around'
        }}>
            {light.map((light,index)=>(
                <div style={{
                    backgroundColor:light.color,
                    width:"100px",
                    height:"100px",
                    borderRadius:"100%",
                    opacity:bright===index? 1 : 0.2

                }}></div>
            ))}

        </div>
<button onClick={()=>setstart(true)}>start</button>
<button onClick={()=>setstart(false)}>stop</button>
<button onClick={()=>setstart((prev)=>!prev)}>{start?"off":"onnn"}</button>
      
    </div>
  ) 
}

export default TrafficLight







 