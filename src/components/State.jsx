import { useState } from "react";


export default function State() {

    const [count, setCount] = useState(5);

    function increaseCounter() 
    {
        setCount(count+1);
    }
    function decreaseCounter() 
    {
        setCount(count-1);
    }
    function resetCounter()
    {
        setCount(0);
    }
    return (
        <div className="w-80 m-auto text-center">
            <h1 >COUNTER</h1>
            <h2 className=" m-auto bg-black text-white w-12">{count}</h2>
            <button className="bg-green-300 border-2" onClick={increaseCounter}> Increase </button>
            <button className="bg-blue-300 border-2" onClick={resetCounter}> Reset </button>
            <button className="bg-red-300 border-2" onClick={decreaseCounter}> Decrease </button>
        </div>
    )
}