import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({ nombre, img, precio, stock }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidad/des`)
    }

    return (
        <Box>
            {nombre}
            <img src={img} alt="imgProducto" />
            precio ${precio}
            <p>Stock {stock}</p>
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
            <ToastContainer />
        </Box>
    )
}

export default ItemDetail
