import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = ({ stock, valorInicial, onAdd }) => {
    const [count, setCount] = useState(valorInicial);

    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

    return (
        <Box>
            <Button onClick={decrementar}>Decrementar</Button>
            {count}
            <Button onClick={incrementar}>Incrementar</Button>
            <Button onClick={() => onAdd(count)}>
                Agregar al arrito
            </Button>
        </Box>
    )
}

export default ItemCount