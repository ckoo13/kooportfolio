import Navbar from '../components/Navbar';
import { Flex, Text } from '@chakra-ui/react';

export default function Resume() {
    return (
        <Flex flexDirection='column' alignItems='center'>
            <Navbar />
            <Flex flexDirection='column' alignItems='center' justifyContent='center' height='40vh' gap={3}>
                <Text fontFamily='Gotham' fontWeight='bold' fontSize={{base:'18px', md:'22px', lg:'26px'}}>
                    Please reach out for an updated resume
                </Text>
                <Text fontSize={{base:'14px', md:'16px', lg:'16px'}} color='gray.500'>
                    kyungmkoo13@gmail.com
                </Text>
            </Flex>
        </Flex>
    )
}
