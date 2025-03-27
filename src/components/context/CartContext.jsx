import React, { createContext, useState } from "react";

//creamos un contexto y lo exportamos
const Context = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (productoAdd, quantity) => {
        const newItem = {
            ...productoAdd,
            quantity,
        };
        if (isInCart(newItem.id)) {
            const updateCart = cart.map((prod) => {
                if (prod.id === newItem.id) {
                    return { ...prod, quantity: prod.quantity + newItem.quantity };
                }
                return prod;
            });
            setCart(updateCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    //Funciones
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };
    const removeItem = (id) => {
        const updateCart = cart.filter((prod) => prod.id !== id);
        setCart([...updateCart]);
    };

    const clearCart = () => {//vacia carrito
        setCart([]);
    };

    const getTotal = () => { //subTotal
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    }

    const getQuantity = () => { //numeral q tiene el carrito (logo)
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const decrementarItem = (id) => {
        const updateCart = cart.map((prod) => {
            if (prod.id === id) {
                const newQuantity = Math.max(prod.quantity - 1, 1)
                return { ...prod, quantity: newQuantity }
            }
            return prod
        })
        setCart(updateCart) //54m clas8
    }

    console.log(cart);

    return (
        <Context.Provider
            value={{
                cart,
                setCart,
                addItem,
                clearCart,
                removeItem,
                getTotal,
                getQuantity
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;
