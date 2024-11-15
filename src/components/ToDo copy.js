import { useState } from "react";

export default function App() {

    const [persons, setPersons] = useState([
        "Vijay", "Ajay", "karan", "arjun"
    ])

    function addData() {

        // const tempArray = [...persons];
        // tempArray.push("aaaa")

        // const tempArray = [...persons, "add"];

        // setPersons([...persons, "add"])
        setPersons((prev) => [...prev, "add"])
    }


    return (
        <div>
            <h1>Hello WOrld</h1>
            {/* {persons} */}
            <ul>
                {persons.map((item, index) => {
                    return <li key={index}>{index + 1} {item} Kumar</li>
                })}
            </ul>

            <button onClick={addData}>Add Data</button>
        </div>
    )
}