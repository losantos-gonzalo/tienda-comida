import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import { MoonLoader } from 'react-spinners'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getProductById(productId)
            .then((data) => {
                if (!data) {
                    navigate('/*')
                } else {
                    setProducto(data)
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [productId])

    return (
        <>
            {
                loading ?
                    <MoonLoader />
                    :
                    <ItemDetail {...producto} />
            }
        </>
    );

}

export default ItemDetailContainer

