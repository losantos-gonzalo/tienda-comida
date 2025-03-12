import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Flex,
    Heading,
} from '@chakra-ui/react'
import '../NavBar/navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (

        <Flex className='navbar'>

            <Heading className='imgLogo'>
                <Link to='/'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/049/116/757/small/mcdonalds-logo-transparent-background-free-png.png" alt="img logo" />
                </Link>
            </Heading>

            <Flex className='caja__pedidos'>
                <Link to='categoria/Papas' className='caja__pedidos__links'>
                    <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar" alt="img-papas" />
                    Papas fritas
                </Link>
                <Link to='categoria/Hamburguesas' className='caja__pedidos__links'>
                    <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar" alt="img-hamburguesas" />
                    Hamburguesas
                </Link>
                <Link to='categoria/Bebidas' className='caja__pedidos__links'>
                    <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar" alt="img-bebidas" />
                    Bebidas
                </Link>
            </Flex>



            <CartWidget />
        </Flex>
    )
}

export default NavBar
