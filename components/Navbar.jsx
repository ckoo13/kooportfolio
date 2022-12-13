import React from 'react';
import Link from 'next/link';
import MobileNavbar from './MobileNavbar';

import { Box, Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();

    const toggleButton = () => {
        if (colorMode === 'light') {
            return (
                <MoonIcon/>
            )
        } else {
            return (
                <SunIcon/>
            )
        }
    }

    return (
        <Flex align='center' justify='space-between' width='85%' mt='10' >
            <Box fontFamily='Gotham' fontWeight='bold' fontSize={{base:'20px', md:'20px', lg:'24px'}}>
                <Link className="navbar-link navbar-name" href='/' >
                        <h1 className="navbar-link">Calvin Koo</h1>
                </Link>
            </Box>
            <Flex display={{base:'none', md:'flex', lg:'flex'}} justifyContent='space-between' alignItems='center'>
                <Link className="navbar-link" href='/' >
                    <Text marginX={4}>Home</Text>
                </Link>
                <Link className="navbar-link" href='/playground'>
                    <Text marginX={4}>Playground</Text>
                </Link>
                <Link className="navbar-link" href='/about'>
                    <Text marginX={4}>About</Text>
                </Link>
                <a href="/resume.pdf" target='_blank'>
                    <Text marginX={4}>Resume</Text>
                </a>
                <Button onClick={toggleColorMode} marginX={4}>
                    {toggleButton()}
                </Button>
            </Flex>
            <MobileNavbar />
        </Flex>
    )
}