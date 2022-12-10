import React from 'react';
import Link from 'next/link';

import { Box, Flex, Text, Button, useColorMode } from '@chakra-ui/react';

export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex align='center' justify='space-between' width='85%' mt='10' >
            <Box fontFamily='Gotham' fontWeight='bold' fontSize={28}>
                <Link className="navbar-link navbar-name" href='/' >
                        <h1 className="navbar-link">Calvin Koo</h1>
                </Link>
            </Box>
            <Flex justifyContent='space-between' alignItems='center'>
                <Link className="navbar-link" href='/' >
                    <Text marginX={4}>Home</Text>
                </Link>
                <Link className="navbar-link" href='/playground'>
                    <Text marginX={4}>Playground</Text>
                </Link>
                <Link className="navbar-link" href='/about'>
                    <Text marginX={4}>About</Text>
                </Link>
                <Text marginX={4}>Resume</Text>
                <Button onClick={toggleColorMode} marginX={4}></Button>
            </Flex>
        </Flex>
    )
}