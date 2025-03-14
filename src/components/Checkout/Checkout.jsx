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

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }


    const getOrder = async () => {
        const coleccion = collection(db, 'orders')

        try {
            const order = {
                buyer: user,
                cart: cart,
                total: getTotal()
            }

            const orderRef = await addDoc(coleccion, order)
            console.log(orderRef.id)
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
// class 1.31

