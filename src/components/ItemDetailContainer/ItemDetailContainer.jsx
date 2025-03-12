import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "productos", productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({ ...docSnap.data(), id: docSnap.id });
                } else {
                    navigate('/not-found');
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productId, navigate]);

    return loading ? <MoonLoader /> : producto ? <ItemDetail {...producto} /> : null;
};

export default ItemDetailContainer;

