import React, { useContext, useState } from 'react'
import Context from '../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Button,

} from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    //estado 1
    const [user, setUser] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    //estado 2
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const { cart, getTotal, clearCart } = useContext(Context)

    const navigate = useNavigate()

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const validateForm = () => {
        const errors = {}

        if (!user.name) {
            errors.name = 'Tienes que agregar un nombre'
        } else if (user.name.length < 4) {
            errors.name = 'El nombre debe tener al menos 4 caracteres'
        }

        if (!user.email) {
            errors.email = 'Tenes que agregar un email'
        } else if (!/\S+@\S+\.\S+/.test(user.name)) {
            error.email = 'El email no es valido!'
        }

            setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        const coleccion = collection(db, 'orders')
        if (!validateForm()) {
            return
        }

        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotal()
            }

            const orderRef = await addDoc(coleccion, order)

            Swal.fire({
                title: "Gracias por tu compra",
                text: `El numero de su compra es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Ir al inicio",
                denyButtonText: `Don't save`
            }).then(() => {
                clearCart()
                navigate('/')
            });

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Flex className='user__Box'>
            <FormControl>

                <FormLabel>Nombre</FormLabel>
                <Input
                    type='text'
                    name='name'
                    placeholder='Juan Carlos'
                    onChange={updateUser}
                />
                <FormErrorMessage>{error.name}</FormErrorMessage>
                <FormLabel>Email</FormLabel>
                <Input type='email'
                    name='email'
                    placeholder='JuanCarlos@hotmail.com'
                    onChange={updateUser}
                />

                <FormLabel>Repetir Email</FormLabel>
                <Input
                    type='email'
                    name='repeatedEmail'
                    placeholder='JuanCarlos@hotmail.com'
                    onChange={updateUser}
                />

                <FormLabel>Telefono</FormLabel>
                <Input
                    type='tel'
                    name='phone'
                    placeholder='11 22334455'
                    onChange={updateUser}
                />

            </FormControl>
            <Button onClick={getOrder}>
                Finalizar Compra!
            </Button>
        </Flex>
    )
}

export default Checkout

// 1:58m class 7

