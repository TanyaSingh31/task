import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../services/cart/CartContext";
import Shop from "./Shop";

export default function HomePage() {
    const location = useLocation();     //read data
    const navigation = useNavigate();   //to navigate
    const { Cart, setCart } = useContext(CartContext)

    console.log(location);

    const loggedIn = true;

    function nextPage() {
        if (loggedIn)
            navigation("/link", {
                state: {
                    name: "Tan ya",
                    age: "23",
                }
            })
        else
            navigation("/login")
    }




    return (
        <div>
            <h1>{location.state?.name || "Default"}</h1>
            <h1>{location.state?.age || "25"}</h1>
            <h4>Cart {Cart.value}</h4>
            <button onClick={nextPage}>TANYA(link page)</button>
            <Shop name="Vijay" time="12:45" />
            < br />
            <Shop name="Ajay" >
                <h1>123</h1>    
                <h1>123</h1>    
            

            </Shop>
            {/* <a href="/second">second page</a>
            < br />
            <Link to="/link">link page</Link>
            < br />
            <Link to="/link" replace={true}>link page</Link> */}
        </div>
    );
}