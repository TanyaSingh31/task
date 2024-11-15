import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

export default function App() {

    const [fullNameInput, setFullNameInput] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [tempData, setTempData] = useState(null)

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
        if (isEditing) {
            setPersons((prev) => [...prev.filter((item) => item.key !== tempData), {
                title: fullNameInput,
                key: tempData,
            }])

        } else {

            setPersons((prev) => [...prev, {
                title: fullNameInput,
                key: Date.now(),
            }])
        }
        setTempData(null);
        setFullNameInput("");
        setIsEditing(false);
    }


    function deleteItem(key) {
        setPersons((prev) => [...prev.filter((item) => item.key !== key)])
    }

    function editButton(item) {
        setIsEditing(true);
        setTempData(item.key)
        setFullNameInput(item.title)
    }

    return (
        <div>
            <h1>Hello WOrld</h1>
            <input placeholder="type your name" value={fullNameInput} onChange={(e) => setFullNameInput(e.target.value)} />
            <ul>
                {persons.sort((a, b) => a.key - b.key).map((item, index) => {
                    return <li key={item.key} className="flex gap-2 items-center">{index + 1} {item.title}
                        <MdOutlineEdit size={26} onClick={() => editButton(item)} />
                        <AiOutlineDelete size={26} onClick={() => deleteItem(item.key)} />
                    </li>
                })}
            </ul>

            <button onClick={addData}>{isEditing ? "Save" : "Add"} Data</button>
        </div>
    )
}