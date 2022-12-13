import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, Button, DrawerCloseButton} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';


export default function MobileNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const navigationItems = () => {
        
    }

    return (
        <>
            <Button display={{base:'block', md:'none', lg:'none'}} ref={btnRef} onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}