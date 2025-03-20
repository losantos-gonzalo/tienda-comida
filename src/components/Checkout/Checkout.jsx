import React, { useContext, useState } from 'react';
import Context from '../context/CartContext';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Button
} from '@chakra-ui/react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [user, setUser] = useState({ name: '', email: '', repeatedEmail: '', phone: '' });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const { cart, getTotal, clearCart } = useContext(Context);
    const navigate = useNavigate();

    const updateUser = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};

        if (!user.name || user.name.length < 4) {
            errors.name = 'El nombre debe tener al menos 4 caracteres';
        }

        if (!user.email) {
            errors.email = 'Tienes que agregar un email';
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email no es válido';
        }

        if (user.repeatedEmail !== user.email) {
            errors.repeatedEmail = 'Los emails no coinciden';
        }

        if (!/^\d{10,15}$/.test(user.phone)) {
            errors.phone = 'El teléfono debe contener entre 10 y 15 números';
        }

        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const getOrder = async () => {
        if (!validateForm()) return;

        try {
            setLoading(true);
            const orderRef = await addDoc(collection(db, 'orders'), {
                buyer: user,
                cart,
                total: getTotal()
            });

            Swal.fire({
                title: 'Gracias por tu compra',
                text: `El número de su compra es: ${orderRef.id}`,
                icon: 'success',
                confirmButtonText: 'Ir al inicio'
            }).then(() => {
                clearCart();
                navigate('/');
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Flex className="user__Box" direction="column" gap="4">
            <FormControl isInvalid={!!error.name}>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" name="name" placeholder="Juan Carlos" onChange={updateUser} />
                <FormErrorMessage>{error.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!error.email}>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" placeholder="juan@email.com" onChange={updateUser} />
                <FormErrorMessage>{error.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!error.repeatedEmail}>
                <FormLabel>Repetir Email</FormLabel>
                <Input type="email" name="repeatedEmail" placeholder="juan@email.com" onChange={updateUser} />
                <FormErrorMessage>{error.repeatedEmail}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!error.phone}>
                <FormLabel>Teléfono</FormLabel>
                <Input type="tel" name="phone" placeholder="1122334455" onChange={updateUser} />
                <FormErrorMessage>{error.phone}</FormErrorMessage>
            </FormControl>

            <Button colorScheme="blue" onClick={getOrder} isLoading={loading} isDisabled={loading}>
                Finalizar Compra
            </Button>
        </Flex>
    );
};

export default Checkout;


