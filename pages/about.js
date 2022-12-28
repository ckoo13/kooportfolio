import React from "react";

import Navbar from "../components/Navbar";

import { Box, Flex, Image, Text } from "@chakra-ui/react";


export default function About() {
    return (
        <Flex flexDirection='column' alignItems='center'>
            <Navbar />

            <Flex justifyContent='space-between' width='100%'>
                <Image marginLeft={{base:'0', md:'10', lg:'20'}} borderRadius='12px' boxSize={{base: '250px', md:'250px', lg:'300px'}} objectFit="cover" src="/about.jpg"></Image>

                <Box width='40%'>
                    <Text fontSize={{base: '12px', md:'16px', lg:'18px'}}>Hello</Text>
                </Box>
            </Flex>
        </Flex>
    )
}