import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, Button} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';


export default function MobileNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Button display={{base:'block', md:'none', lg:'none'}} ref={btnRef} onClick={onOpen}>
                Open
            </Button>
            
        </>
    )
}