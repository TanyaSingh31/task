import { useEffect, useState } from "react";

export default function App() {
    const [fullNameInput, setFullNameInput] = useState([]);
    const [counter, setCounter] = useState(0);

    async function callingAPI() {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users");
            const resp = await data.json()
            setFullNameInput(resp);
        } catch (error) {
            alert("ERROR: SERVER IS DOWN!")
            console.log(error);
        } finally {
            console.log("API IS CALLED!")
        }
    }


    useEffect(() => {
        alert(counter)
        console.log(counter);
    }, [counter, fullNameInput])

    return (
        <div>
            <h2>WELCOME PAGE {counter}</h2>
            {/* {fullNameInput[1]?.title} */}
            {fullNameInput.map((item) => {
                return <h4 key={item.id}>{item.name}</h4>;
            })}
            <button onClick={() => {
                setCounter(prev => prev + 1)
            }}>Add Data</button>
        </div>
    );
}