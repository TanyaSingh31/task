import { useState } from "react";

export default function App() {
    const [fullNameInput, setFullNameInput] = useState([]);

    // function callingAPI() {
    //     fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
    //         return data.json();
    //     }).then((data)=>{
    //         console.log(data);
    //         setFullNameInput(data)
    //     })
    // }

    async function callingAPI() {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users");
            const resp = await data.json()
            console.log(resp)
        } catch (error) {
            alert("ERROR: SERVER IS DOWN!")
            console.log(error);
        } finally {
            console.log("API IS CALLED!")
        }
    }

    return (
        <div>
            <h2>WELCOME PAGE</h2>
            {/* {fullNameInput[1]?.title} */}
            {fullNameInput.map((item) => {
                return <h4 key={item.id}>{item.name}</h4>;
            })}
            <button onClick={callingAPI}>Add Data</button>
        </div>
    );
}