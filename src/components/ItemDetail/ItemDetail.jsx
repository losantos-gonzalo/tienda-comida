import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import Context from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, img, precio, stock, id }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addItem } = useContext(Context);

    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio,
        };
        addItem(item, quantity);
        toast(`Agregaste ${quantity} unidad/des`);
        setCantidad(quantity);
    };

    return (
        <Box className="ItemDetail">
            {nombre}
            <img src={img} alt="imgProducto" />
            precio ${precio}
            <p>Stock {stock}</p>
            <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
            <Button>
                <Link to="/cart">Ir al Carrito</Link>
            </Button>
            <ToastContainer />
        </Box>
    );
};

export default ItemDetail;
