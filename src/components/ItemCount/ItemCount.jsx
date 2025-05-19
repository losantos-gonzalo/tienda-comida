import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = ({ stock, valorInicial, onAdd, maxAvailable }) => {
    const [count, setCount] = useState(valorInicial);

    const incrementar = () => {
        count < maxAvailable && setCount(count + 1)
    }

    const decrementar = () => {
        count > 1 && setCount(count - 1)
    }

    return (
        <Box className='itemCount'>

            <Box className='itemCount-btns'>
                <Button onClick={decrementar}>Decrementar</Button>

                <Box className='count'>{count}</Box>

                <Button onClick={incrementar}>Incrementar</Button>
            </Box>

            <Button onClick={() => onAdd(count)} className='itemCount-btn'>
                Agregar al arrito
            </Button>
        </Box>
    )
}

export default ItemCount