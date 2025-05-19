import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import "../Item/item.css";
import { Link } from "react-router-dom";

const Item = ({ nombre, precio, img, descripcion, id, stock }) => {
    return (
        <Flex className="cartitaP">
            <Box className="catitaP-hijo">
                <p>{nombre}</p>
                <img src={img} />
                <p>${precio}</p>
                <p>Stock {stock}</p>
                <p className="descripcion"> {descripcion}</p>
                <Button className="btn">
                    <Link to={`/producto/${id}`}>Ver detalle</Link>
                </Button>
            </Box>
        </Flex>
    );
};

export default Item;
