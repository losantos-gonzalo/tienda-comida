import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    console.log(productId)

    useEffect(() => {
        getProductById(productId)
            .then((data) => setProducto(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [productId])

    return (
        <div>

        </div>
    );

}

export default ItemDetailContainer
//1.20m
