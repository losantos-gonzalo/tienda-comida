import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

// Item Count ESTADOS
const ItemCount = () => {
    const [count, setCount] = useState(1);

    const incrementar = () => {
        setCount(count < 10 ? count + 1 : count)
    }

    const decrementar = () => {
        setCount(count > 0 ? count - 1 : count)
    }

    return (
        <div>
            <Button onClick={decrementar}>Decrementar</Button>
            {count}
            <Button onClick={incrementar}>Incrementar</Button>
        </div>
    )
}

export default ItemCount
