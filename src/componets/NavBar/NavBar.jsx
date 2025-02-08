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

const NavBar = () => {

    return (
        <Flex className='navbar'>
            <Heading className='imgLogo'>
                <img src="https://1000marcas.net/wp-content/uploads/2019/11/McDonalds-logo.png" alt="img logo" />
            </Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>Empanadas</MenuItem>
                    <MenuItem>Pizzas</MenuItem>
                    <MenuItem>Hanburguesas</MenuItem>
                </MenuList>
            </Menu>

            <CartWidget />
        </Flex>
    )
}

export default NavBar
