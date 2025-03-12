import React, { useContext } from 'react'
import './CartWidget.css'
import { IoCartOutline } from "react-icons/io5";
import { Flex } from '@chakra-ui/react';
import Context from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getQuantity } = useContext(Context)

    return (

        <Flex className='car' justify={'center'} >
            <Link to='/cart'><IoCartOutline /></Link>
            <span>
                {
                    getQuantity() > 0 && getQuantity()
                }
            </span>
        </Flex>
    )
}

export default CartWidget