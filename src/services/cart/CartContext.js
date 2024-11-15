import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [Cart, setCart] = useState({
        value: 10
    });
    const [CartAuth, setCartAuth] = useState({});





    return <CartContext.Provider value={{
        Cart,
        setCart
    }} >{children}</CartContext.Provider>
}