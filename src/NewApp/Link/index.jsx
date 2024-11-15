import { useLocation, useNavigate, useParams, Link } from "react-router-dom"
import { CartContext } from "../../services/cart/CartContext";
import { useContext } from "react";

export default function Second() {
    let { userId } = useParams();
    const location = useLocation();     //use data
    const { setCart } = useContext(CartContext)

    console.log(location.state?.name);

    const navigate = useNavigate();   //to navigate

    function goToDirectory() {
        // navigate("/", {
        //     state: {
        //         name: "Tanya",
        //         age: 23,
        //     },
        // });

        setCart({ value: 20 })

    }

    console.log({ userId });

    return (
        <div>
            <h1>link page{location.state?.name}</h1>
            <p>{userId}</p>

            <a href="/">home page</a>
            < br />
            <Link to="/second" param>second Page</Link>
            < br />
            <button onClick={() => navigate("/")}>go to</button>
            <br />
            <button onClick={() => navigate("/", { replace: true })}>
                go to using replace
            </button>
            < br />
            <button onClick={goToDirectory}>go to with some data</button>
        </div>
    );


    //     <div className="align-baseline	">            
    //         {/* <h1>welcome to link Page</h1> */}
    //         <div>
    //             first
    //         </div>
    //         <div>
    //             second
    //         </div>
    //         <div>
    //             third
    //         </div></div>
    <div>

    </div>

}