import React from 'react';
import TypedText from './TypedText';

import { Box, Text, Flex, Image } from '@chakra-ui/react';


export default function Hero({props}) {
    

    return (
        <Flex justifyContent='space-between' alignItems='center' marginY={{base:'0', md:'20', lg:'20'}} marginTop={{base:'10'}} flexDirection={{base: 'column', md:'row', lg:'row'}} >
            <Box width={{base:'90%', md:'65%', lg:'65%'}} >
                <TypedText />

                <Text fontSize={{base: '12px', md:'16px', lg:'18px'}} marginX={{base:'0', md:'20', lg:'40'}} marginTop={10} fontFamily='Gotham' fontWeight='normal' lineHeight={1.5}>I&apos;m a Private Equity investor at Sunstone Partners in New York City, focused on growth and buyout investments in tech-enabled services and software businesses. I&apos;m an Economics grad from Claremont McKenna College with a passion for the intersection of technology, strategy, and business — and I write about it on Substack and Brunch Korea.</Text>
            </Box>
            <Box>
                <Image boxSize={{base: '250px', md:'250px', lg:'300px'}} src="/memoji.png" alt="" marginRight={{base:'0', md:'10', lg:'20'}} />
            </Box>
        </Flex>
    )
}