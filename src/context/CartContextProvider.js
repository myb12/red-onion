import React, { createContext } from 'react';
import { useState } from 'react';
import useFoods from '../hooks/useFoods';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [foods] = useFoods();
    const [cart, setCart] = useState(foods);
    console.log(cart);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;