import React, { useContext } from 'react'
import './CartWidget.css'
import { Flex } from '@chakra-ui/react';
import Context from '../context/CartContext';
import { Link } from 'react-router-dom';
import Carrito from './Carrito';

const CartWidget = () => {
    const { getQuantity } = useContext(Context)

    return (

        <Flex className='car' justify={'center'} >

            <Link className='car__link' to='/cart'>
                < Carrito />
            </Link>

            <span className='numerito'>
                {
                    getQuantity() > 0 && getQuantity()
                }
            </span>
        </Flex>
    )
}

export default CartWidget