import React from 'react'
import './CartWidget.css'
import { IoCartOutline } from "react-icons/io5";
import { Box } from '@chakra-ui/react';
import '../CartWidget/cartWidget.css'

const CartWidget = () => {

    return (
        <Box className='car'>
            <IoCartOutline />
        </Box>
    )
}

export default CartWidget
