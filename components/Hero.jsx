import React from 'react';
import TypedText from './TypedText';

import { Box, Text, Flex, Image } from '@chakra-ui/react';


export default function Hero({props}) {
    

    return (
        <Flex justifyContent='space-between' alignItems='center' marginY={{base:'0', md:'10', lg:'12'}} marginTop={{base:'6'}} flexDirection={{base: 'column', md:'row', lg:'row'}} >
            <Box width={{base:'90%', md:'65%', lg:'65%'}} >
                <TypedText />

                <Text fontSize={{base: '12px', md:'16px', lg:'18px'}} marginX={{base:'0', md:'20', lg:'40'}} marginTop={10} fontFamily='Gotham' fontWeight='normal' lineHeight={1.5}>I&apos;m a Private Equity investor at Sunstone Partners in San Mateo, focused on growth equity investments in tech-enabled services and software. I write about what I&apos;m seeing in the market on Substack and Brunch Korea.</Text>
            </Box>
            <Box>
                <Image boxSize={{base: '250px', md:'250px', lg:'300px'}} src="/memoji.png" alt="" marginRight={{base:'0', md:'10', lg:'20'}} />
            </Box>
        </Flex>
    )
}