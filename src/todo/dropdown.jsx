// import React, { useState } from 'react'
// function CheckBox() {

//     const list = [
//         { id: 1, text: "HTML" },
//         { id: 2, text: "CSS" },
//         { id: 3, text: "JavaScript" },
//         { id: 4, text: "React" },{ id: 5, text: "Redux" }, { id: 6, text: "Go" }
//     ];
//     const [show, setShow] = useState(false);//skill show cheyyan button
//     const [skill, setSkill] = useState([]);


//     const handleCheckk = (id, checked) => {
//         setSkill(prev => {
//             if (checked) {
//                 if (prev.some(item => item.id == id)) return prev;///alreday checked ahneelll return
//                 const newItem = list.find(item => item.id == id);
//                 return newItem ? [...prev, newItem] : prev;
//             } else { return prev.filter((item) => item.id !== id) }//check cheythaninee oyvakkan
//         })
//     }
//     return (
//         <div>
//             <div>
//                 <h2>Select skills</h2>
//                 <ul>
//                     {list.map((item) => (
//                         <li><label><input type="checkbox" checked={skill.some(skill => skill.id == item.id)}
//                          onChange={(e) => handleCheck(item.id, e.target.checked)} />{item.text}</label></li>
//                     ))}

//                 </ul>
//             </div>
//             <div>
//                 <h2>Selected skills 
//                     <button onClick={() => setShow(prev => !prev)}>{show ? "Hide" : "Show"}</button>
//                     </h2>
//                 {show &&
//                     <ul>
//                         {skill.map((skill) => <li key={skill.id}>{skill.text}</li>)}
//                     </ul>
//                 }

//             </div>
//         </div>
//     )
// }

// export default CheckBox






import React, { useState } from 'react'

function CheckBox() {
    const list = [
        { id: 1, Text: "html" },
        { id: 2, Text: "css" },
        { id: 3, Text: "javvaaa" },
        { id: 4, Text: "reactt" },
        { id: 5, Text: "redux" },
        {id:6, Text:"python"}
    ]
    const [skill, setSkill] = useState([])

    const [show, setshow] = useState(false)

    const handleCheck = (id, checked) => {
        setSkill(prev => {
            if (checked) {
                if (prev.some(item => item.id == id)) return prev;
                const newtext = list.find(item => item.id == id);
                return newtext ? [...prev, newtext] : prev

            } else { return prev.filter(item => item.id !== id) }

        })

    }

    return (
        <div>
            <div>
                <h1>select skilll please</h1>
                <ul>
                    {list.map(item => (
                        <li><label><input type="checkbox" onChange={(e) => handleCheck(item.id, e.target.checked)} />{item.Text}</label></li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>your skilss are:-
                    <button onClick={() => setshow(prev => !prev)}> {show ? "hide" : "show"}</button>
                </h1>
                <ul>

                    {show && skill.map(item => (
                        <li key={item.id}>{item.Text}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default CheckBox


