import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Box,
    Flex,
    Heading,
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";
import '../NavBar/navbar.css'

const NavBar = () => {

    return (
        <Flex className='navbar'>
            <Heading>Logo</Heading>
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
