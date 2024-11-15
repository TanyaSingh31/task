import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function App() {

    const [fullNameInput, setFullNameInput] = useState("")

    const [persons, setPersons] = useState([
        {
            title: "Vijay",
            key: 0,
        },
        {
            title: "Ajay",
            key: 1,
        },
        {
            title: "Karan",
            key: 2,
        }
    ])

    function addData() {

        // const tempArray = [...persons];
        // tempArray.push("aaaa")
        // const tempArray = [...persons, "add"];
        // setPersons([...persons, "add"])

        setPersons((prev) => [...prev, {
            title: fullNameInput,
            key: Date.now(),
        }])

        setFullNameInput("")

        // key: persons[persons.length - 1].key + 1,
    }


    function deleteItem(key) {
        setPersons((prev) => [...prev.filter((item) => item.key !== key)])
    }


    return (
        <div>
            <h1>Hello WOrld</h1>
            {/* {persons} */}
            {/* {fullNameInput} */}
            <input placeholder="type your name" value={fullNameInput} onChange={(e) => setFullNameInput(e.target.value)} />
            <ul>
                {persons.map((item, index) => {
                    return <li key={item.key} className="flex gap-2 items-center">{index + 1} {item.title} Kumar  <AiOutlineDelete size={26} onClick={() => deleteItem(item.key)} />
                    </li>
                })}
            </ul>

            <button onClick={addData}>Add Data</button>
        </div>
    )
}