import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import Context from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, img, precio, stock, id, currentQuantity }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addItem } = useContext(Context);
    const maxAvailable = stock - currentQuantity;

    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio,
            img,
            stock
        };
        addItem(item, quantity);
        toast(`Agregaste ${quantity} unidad/des`);
        setCantidad(quantity);
    };

    return (

        <Box className="ItemDetail">

            <h2>Detalle del producto</h2>
            <Box className="ItemDetail__container">
                {nombre}
                <img src={img} alt="imgProducto" />
                precio ${precio}
                <p>Stock {stock}</p>
                <p>Cantidad actual en el carrito {currentQuantity}</p>
                <ItemCount
                    maxAvailable={maxAvailable}
                    stock={stock}
                    valorInicial={1}
                    onAdd={onAdd}
                />
                <Button>
                    <Link to="/cart">Ir al Carrito</Link>
                </Button>
                <ToastContainer />
            </Box>
        </Box>
    );
};

export default ItemDetail;
