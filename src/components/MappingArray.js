export default function App() {

    const persons = [
        "Vijay", "Ajay", "karan", "arjun"
    ]


    return (
        <div>
            <h1>Hello WOrld</h1>
            {/* {persons} */}
            <ul>
                {persons.map((item,index)=>{
                        return <li>{index  + 1} {item} Kumar</li>
                })}
            </ul>
        </div>
    )
}