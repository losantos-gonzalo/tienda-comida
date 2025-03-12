import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Heading,
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import '../NavBar/navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (

        <Flex className='navbar'>

            <Heading className='imgLogo'>
                <Link to='/'>
                    <img src="https://1000marcas.net/wp-content/uploads/2019/11/McDonalds-logo.png" alt="img logo" />
                </Link>
            </Heading>

            <Menu>
                <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                    Categorias
                </MenuButton>

                <MenuList>
                    <MenuItem>
                        <Link to='categoria/Papas'>Papas fritas</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to='categoria/Bebidas'>Bebidas</Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to='categoria/Hamburguesas'>Hamburguesas</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            
                <CartWidget />
        </Flex>
    )
}

export default NavBar
