import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        const docRef = doc(db, "productos", productId);
        getDoc(docRef)
            .then((resp) => {
                console.log(resp.id);
            })

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
