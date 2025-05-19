import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'
import '../ItemList/itemList.css'

const ItemList = ({ products }) => {

    return (
        <Flex className='itemL'>
            {
                products.map((prod) => (

                    <Box
                        className='itemL-item'
                        key={prod.id}
                    >
                        <Item {...prod} />
                    </Box>
                ))
            }
        </Flex>
    )
}

export default ItemList
