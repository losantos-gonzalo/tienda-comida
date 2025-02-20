import React, { createContext, useState } from 'react'

//creamos un contexto y lo exportamos
const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (productoAdd, quantity) => {
        const newItem = {
            ...productoAdd,
            quantity
        };
        if (isInCart(newItem.id)) {
            const updateCart = cart.map((prod) => {
                if (prod.id === newItem.id) {
                    return { ...prod, quantity: prod.quantity + newItem.quantity }
                }
                return prod
            })
            setCart(updateCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const removeItem = (id) => {
        const updateCart = cart.filter((prod) => prod.id !== id)
        setCart([...updateCart])
    }

    const clearCart = () => { //vacia carrito
        setCart([])
    }

    console.log(cart)



    return (
        <Context.Provider
            value={{
                cart,
                setCart,
                addItem,
                clearCart,
                removeItem
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context
