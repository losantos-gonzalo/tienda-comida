import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import '../Item/item.css'

const Item = ({ nombre, precio, img, descripcion }) => {

    return (
        <Flex className='cartitaP'>

            <Box className='catitaP-hijo'>
                <p>{nombre}</p>
                <p>{precio}</p>
                <img src={img} />
                <p className='descripcion'> {descripcion}</p>
            </Box>
        </Flex>
    )
}

export default Item
