import { useState } from "react";

export default function App() {

    const [fullNameInput, setFullNameInput] = useState("")

    const [persons, setPersons] = useState([
        {
            name:"tanya"
        },
        {
            name:"riya"
        },
        {
            name:"inder"
        },
        {
            name:"arya"
        }
        
   ] )

    function addData() {

        setPersons((prev) => [...prev, {
            title: fullNameInput,
        }])

        setFullNameInput("")
    }


    return (
        <div>
            <input placeholder="type your name" value={fullNameInput} onChange={(e) => setFullNameInput(e.target.value)} />
            <br />
            <br />
            <button onClick={addData}>Add Data</button>
            <br/>
            <br/>
            <ul>
                {persons.map((item, index) => {
                    return <li key={index}> {index + 1} {item} </li>
                })}
            </ul>

        </div>
    )
}