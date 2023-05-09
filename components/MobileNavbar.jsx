import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, Button, DrawerCloseButton, Text} from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';


export default function MobileNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const navigationItems = () => {
        const itemList = ['Home', 'Playground', 'About', 'Resume']

        itemList.map(item => {
            return (
                <Link key={item} href={`/`}>
                </Link>
            )
        })
    }

    return (
        <>
            <Button display={{base:'block', md:'none', lg:'none'}} ref={btnRef} onClick={onOpen}>
                <HamburgerIcon/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='full'
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerBody>
                        <VStack alignItems='center'>
                            <Link href='/'>Home</Link>
                            <Link href='/playground'>Playground</Link>
                            <Link href='/about'>About</Link>
                            <a href="/resume.pdf" target='_blank'>
                                <Text marginX={4}>Resume</Text>
                            </a>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}