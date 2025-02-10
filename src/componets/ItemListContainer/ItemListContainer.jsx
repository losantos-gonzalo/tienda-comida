import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

        dataProductos
            .then((data) => setProducts(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])


    return (
        <Flex className='cajita'>

            <Box className='tienda'>
                <Heading >Tienda</Heading>
            </Box>
            {
                loading ?
                    <MoonLoader  className='spiners'/>
                    :
                    <ItemList products={products} />
            }
        </Flex>
    )
}

export default ItemListContainer
