import React, { createContext, useState } from 'react'

//creamos un contexto y lo exportamos
const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productoAdd, quantity) => {
        const newItem = {
            ...productoAdd,
            quantity
        }

        setCart(newItem)
    }

    return (
        <Context.Provider
            value={{
                cart,
                setCart,
                addItem
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context
