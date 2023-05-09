import React from 'react';
import TypedText from './TypedText';

import { Box, Text, Flex, Image } from '@chakra-ui/react';


export default function Hero({props}) {
    

    return (
        <Flex justifyContent='space-between' alignItems='center' marginY={{base:'0', md:'20', lg:'20'}} marginTop={{base:'10'}} flexDirection={{base: 'column', md:'row', lg:'row'}} >
            <Box width='65%' >
                <TypedText />

                <Text fontSize={{base: '12px', md:'16px', lg:'18px'}} marginX={{base:'0', md:'20', lg:'40'}} marginTop={10} fontFamily='Gotham' fontWeight='normal' lineHeight={1.5}>I&apos;m a recent graduate of Claremont McKenna College and just moved to New York City! I&apos;m an Economics major turned software engineer and I&apos;m looking to pursue a career in the technology industry through building user-focused products. My passion lies in improving the lives of people through creating seamless experiences and optimizing various aspects of daily life.</Text>
            </Box>
            <Box>
                <Image boxSize={{base: '250px', md:'250px', lg:'300px'}} src="/memoji.png" alt="" marginRight={{base:'0', md:'10', lg:'20'}} />
            </Box>
        </Flex>
    )
}