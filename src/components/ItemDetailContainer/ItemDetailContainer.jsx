import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Context from '../context/CartContext';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const { currentQuantity } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "productos", productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProducto({
                        ...docSnap.data(),
                        id: docSnap.id
                    });
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

    return loading ? <MoonLoader /> :
        producto ?
            <ItemDetail {...producto} currentQuantity={currentQuantity(productId)} /> : null;
};

export default ItemDetailContainer;

