import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../../data/asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => setProducts(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <Flex className='cajita'>
            <Box className='tienda'>
                <Heading >Tienda</Heading>
            </Box>
            <ItemList products={products} />
        </Flex>
    )
}

export default ItemListContainer
