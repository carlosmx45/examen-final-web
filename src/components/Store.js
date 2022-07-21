import { useRef, useState, } from 'react';
import { Box, Button, Flex, Center, Heading, Input, Spacer, Stack, Text, Tag, SimpleGrid, GridItem, Image, Spinner } from "@chakra-ui/react";

import Header from "./Header.js";

//Muestra de Items
const StoreItem = ({ title, color, potencia, price, image }) => {
    return (
        <Box p={4} borderRadius="lg" borderWidth="1px">
            <Center>
                <Image src={image} h="sm" />
            </Center>
            <Heading noOfLines={2} size="sm" fontWeight="normal">
                {title}, Color: {color}.
            </Heading>
            <Text>Potencia: {potencia}.</Text>
            <Tag mt={4}>${price}</Tag>
        </Box>
    );
};


//referencias para Ingreso de Items
function Store({ items, loading }) {
    //Sistema de Visaluzacion de Items
    const [filteredItems, setFilteredItems] = useState(items);

    return (
        <Box>
            <Header title="Card-Jitsu.Online" />
            {loading ? (
                <Center mt={6}>
                    <Spinner />
                </Center>
             ) : (
                <Box p={2}>
                    <Input
                        onChange={(e) => {
                            let f = items.filter((item) => 
                                item.title.toLowerCase().includes(e.target.value.toLowerCase())
                            );
                            console.log("f" ,f);
                            setFilteredItems(f);
                        }} 
                        placeholder="Buscar"
                        mt={4}
                    />
                    <SimpleGrid columns={5} spacing={4} mt={4} p={2}>
                        {filteredItems.map((item) => {
                            return (
                                <GridItem>
                                    <StoreItem {...item} />
                                </GridItem>
                            )
                        })}
                    </SimpleGrid>
                </Box>
            )}
        </Box>
    );
}

export default Store;