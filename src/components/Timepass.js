import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

export default function App()
{
    
    const [nameInput, setNameInput] = useState("")  
    const [marksInput, setMarksInput] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [tempData, setTempData] = useState(null)

    const [info , setInfo]= useState([
        {
            name:"tanya",
            marks:70,

        },
        {
            name:"riya",
            marks:88,
        },
        {
            name:"inder",
            marks:97,
            
        },
        {
            name:"piyush",
            marks:94,
        },
    ])

    function addInfo()
    {
        if(isEditing)
        {
            
            setInfo((prev) => [...prev.filter((item,index) => index !== tempData), {
                name: nameInput,
                marks: marksInput,
                index: tempData,
            }])
        }
        else
        {
            setInfo((prev)=>[...prev,{
                name: nameInput,
                marks: marksInput,
            }])

        }
        setTempData(null);
        setNameInput("");
        setMarksInput("");
        setIsEditing(false);
    }

    
    function deleteItem(index1) {
        setInfo((prev) => [...prev.filter((item,index) => index !== index1)])
    }

    function editButton(item, index)
    {
        setIsEditing(true)
        setTempData(index)
        setNameInput(item.name);
        setMarksInput(item.marks);
    }
    

    return(
        <div>
            <h2>students details</h2>
            <input placeholder="enter your name" value={nameInput} onChange={(e) => setNameInput(e.target.value)}/>
            <input placeholder="enter your marks" value={marksInput} onChange={(e) => setMarksInput(e.target.value)}/>
            <ul>
                {info.sort((a,b) => a.index - b.index).map((item, index) => {
                    return <li key={index} className="flex gap-2 items-center">
                        ({index+1}.) {item.name} : {item.marks}/100 
                        <MdOutlineEdit size={26} onClick={() => editButton(item, index)} />
                        <AiOutlineDelete size={26} onClick={() => deleteItem(index)} /> 
                    </li>
                })}
            </ul>
            <button onClick={addInfo}>{isEditing ? "save" : "add"} Data</button>
        </div>
    )
}