import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import ItemList from '../ItemList/ItemList';
import { db } from '../../config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        let isMounted = true;

        const fetchProducts = async () => {
            try {
                setLoading(true);
                const productosRef = collection(db, "productos");

                const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef;

                const snapshot = await getDocs(q);
                if (isMounted) {
                    setProducts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error al obtener productos:", error);
                if (isMounted) setLoading(false);
            }
        };

        fetchProducts();

        return () => {
            isMounted = false;
        };
    }, [categoryId]);

    return (
        <Flex className='productos'>
            <Box className='title'>{title}</Box>
            <hr />
            {loading ? <MoonLoader color="black" className='loading' /> : <ItemList products={products} />}
        </Flex>
    );
};

export default ItemListContainer;



