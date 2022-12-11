import React from 'react';
import TypedText from './TypedText';

import { Box, Text, Flex, Image } from '@chakra-ui/react';


export default function Hero() {

    return (
        <Flex justifyContent='space-between' alignItems='center' marginY={20} flexDirection={{base: 'column', md:'row', lg:'row'}} >
            <Box width='65%' >
                <TypedText />

                <Text fontSize={{base: '12px', md:'16px', lg:'18px'}} marginX={{base:'0', md:'20', lg:'40'}} marginTop={10} fontFamily='Gotham' fontWeight='normal' lineHeight={1.5}>I'm a recent graduate of Claremont McKenna College and just moved to New York City! I'm an Economics major turned software engineer and I'm looking to pursue a career in the technology industry through building user-focused products. My passion lies in improving the lives of people through creating seamless experiences and optimizing various aspects of daily life.</Text>
            </Box>
            <Box>
                <Image boxSize='300px' src="/memoji.png" alt="" marginRight={20} />
            </Box>
        </Flex>
    )
}