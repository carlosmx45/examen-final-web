import { useRef } from 'react';
import { Box, Button, Flex, Heading, Input, Spacer, Stack, Tag } from "@chakra-ui/react";

const StoreItem = ({ title, price }) => {
    return (
        <Box p={4} borderRadius="lg" borderWidth="1px">
            <Flex alignItems="center">
                <Heading size="md">{title}</Heading>
                <Spacer />
                <Tag>${price}</Tag>
            </Flex>
        </Box>
    );
};


function Store({ items, onItemAdd }) {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();

    return (
        <Box p={4}>
            <Stack>
                {items.map((item) => {
                    return <StoreItem title={item.title} price={item.price} />
                })}
           </Stack>

           <Input ref={itemNameRef} mt={10} placeholder="Item name" />
           <Input ref={itemPriceRef} mt={2} placeholder="Price" type="number" />
           <Button mt={2} onClick={() => {
            onItemAdd({
                title: itemNameRef.current.value,
                price: itemPriceRef.current.value,
            });
           }}> Add Item</Button>
        </Box>
    );
}


export default Store;