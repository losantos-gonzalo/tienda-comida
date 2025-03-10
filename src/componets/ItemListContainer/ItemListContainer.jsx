import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { MoonLoader } from 'react-spinners'
import ItemList from '../ItemList/ItemList'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            // obtenemos la referencia a la coleccion
            const coleccion = collection(db, 'productos')

            //creamos una referencia a la consulta
            const queryRef = !categoryId ?
                coleccion
                :
                // con query, le pasamos la coleccion y los datos a filtrar
                query(coleccion, where('categoria', '==', categoryId))

            // obtenemos los documenos
            const response = await getDocs(queryRef)

            //mapeamos los docs y creamos un nuevo objeto con los datos del producto y el id q definimos de manera automatica
            const productos = response.docs.map((doc) => {
                const newItem = {
                    ...doc.data(),
                    id: doc.id
                }
                return newItem
            })
            setProducts(productos)
            setLoading(false)
        }

        getData()
    }, [categoryId])


    return (
        <Flex className='productos'>
            <Box className='title'>
                {title}
            </Box>
            <hr />

            {
                loading ?
                    <MoonLoader color="black" className='loading' />
                    :
                    <ItemList products={products} />
            }
        </Flex>
    );
}

export default ItemListContainer;


