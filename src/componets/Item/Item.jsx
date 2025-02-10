import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import '../Item/item.css'

const Item = ({ nombre, precio, img, descripcion }) => {

    return (
        <Flex className='cartitaP'>

            <Box className='catitaP-hijo'>
                <p>{nombre}</p>
                <img src={img} />
                <p>${precio}</p>
                <p className='descripcion'> {descripcion}</p>
                <Button>Ver mas</Button>
            </Box>
        </Flex>
    )
}

export default Item
