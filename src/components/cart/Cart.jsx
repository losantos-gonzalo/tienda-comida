import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import Context from "../context/CartContext";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import './cart.css'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal, incrementarItem, decrementarItem, } = useContext(Context);

    if (cart.length === 0) {
        return (
            <Flex direction={'column'} justify={'center'} align={'center'}
                className="noItems">
                <Heading className="noItems__title">Todavia no agregaste productos al carrito</Heading>
                <Link to='/'
                    className="noItems__link"
                >Ver productos</Link>
            </Flex>
        )
    } else {

        return (
            <Flex className="cart" direction="column" align="center" justify="center">

                <TableContainer className="cart__table">

                    <Table variant="striped" colorScheme="teal">
                        <Thead>
                            <Tr>
                                <Th>Nombre</Th>
                                <Th>Cantidad</Th>
                                <Th>Acciones</Th>
                                <Th>Precio</Th>
                                <Th>Subtotal</Th>
                                <Th>Eliminar</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {cart.map((prod) => (
                                <Tr key={prod.id}>
                                    <Td>{prod.nombre}</Td>
                                    <Td>{prod.quantity}</Td>
                                    <Td>
                                        <Button size="sm" onClick={() => decrementarItem(prod.id)}>-</Button>
                                        <Button size="sm" onClick={() => incrementarItem(prod.id)}>+</Button>
                                    </Td>
                                    <Td>${prod.precio}</Td>
                                    <Td>${prod.precio * prod.quantity}</Td>
                                    <Td>
                                        <Button size="sm" colorScheme="red" onClick={() => removeItem(prod.id)}>
                                            <RiDeleteBin5Line />
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th colSpan={4} textAlign="right">Total:</Th>
                                <Th>${getTotal()}</Th>
                                <Th></Th>
                            </Tr>
                            <Tr>
                                <Th colSpan={3}></Th>
                                <Th>
                                    <Heading>
                                        {getTotal()}
                                    </Heading>
                                </Th>
                                <Th>
                                    <Link to='/checkout'>
                                        Finalizar compra
                                    </Link>
                                </Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>

                {/* Versión mobile */}
                <Box className="cart-mobile">
                    {cart.map((prod) => (

                        <Box className="cart-mobile-card" key={prod.id}>
                            <p><strong>Producto:</strong> {prod.nombre}</p>
                            <p><strong>Precio:</strong> ${prod.precio}</p>
                            <p><strong>Subtotal:</strong> ${prod.precio * prod.quantity}</p>
                            <p><strong>Cantidad:</strong> {prod.quantity}</p>
                            <img src={prod.img} alt="imgProducto" />

                            <div className="actions">
                                <Button size="sm" onClick={() => decrementarItem(prod.id)}>-</Button>
                                <span>{prod.quantity}</span>
                                <Button size="sm" onClick={() => incrementarItem(prod.id)}>+</Button>
                                <Button size="sm" colorScheme="red" onClick={() => removeItem(prod.id)}>
                                    <RiDeleteBin5Line />
                                </Button>
                            </div>
                        </Box>
                    ))}
                    <p className="cart__total">Total: ${getTotal()}</p>
                    <Link to="/checkout" className="cart__checkout">Finalizar compra</Link>
                    <Button className="cart__clear" onClick={clearCart}>Vaciar carrito</Button>
                </Box>

            </Flex>
        );
    };
};
export default Cart;
