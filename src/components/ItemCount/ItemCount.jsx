import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = ({ stock, valorInicial, onAdd, maxAvailable }) => {
    const [count, setCount] = useState(valorInicial);

    const incrementar = () => {
        count < maxAvailable && setCount(count + 1)
    }

    const decrementar = () => {
        count > maxAvailable && setCount(count - 1)
    }

    return (
        <Box className='itemCount'>

            <Box className='count'>
                {count}
            </Box>
            <Button onClick={decrementar}>Decrementar</Button>

            <Button onClick={incrementar}>Incrementar</Button>
            <Button onClick={() => onAdd(count)}>
                Agregar al arrito
            </Button>
        </Box>
    )
}

export default ItemCount