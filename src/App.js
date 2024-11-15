import "./App.css";
// import Personal from "./components/Information" 
// import {Professional} from "./components/Information" 
// import State from "./components/State";
// import Todo from "./components/ToDo" 
// import Timepass from "./components/Timepass"
// import UseEffect from "./components/UseEffect"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from "./NewApp/HomePage";
// import SecondPage from "./NewApp/SecondPage";
// import Link from "./NewApp/Link";
// dqweqweqwe
// import { CartProvider } from "./services/cart/CartContext";
import HomePage from "./task/HomePage";
import ListPage from "./task/ListPage";
import { CartProvider } from "./task/Cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          {/* <Route path="/Second/:userId" element={<SecondPage/>} />
          <Route path="/link" element={<Link />} /> */}
        </Routes>
      </BrowserRouter>
    </CartProvider>


    // <div className="bg-white h-screen">
    //   {/* <State /> */}
    //   {/* <Todo /> */}
    //   {/* <Timepass/> */}
    //   {/* <Fetch/> */}
    //   <UseEffect/>
    //   {/* <Personal name=" Tanya" age=" 23"/>
    //   <Professional company=" Railways" experience=" 3"/>
    //   <Personal name=" Inder" age=" 26"/>
    //   <Professional company=" Railways" experience=" 5"/> */}
    // </div>
  )
}

export default App;


