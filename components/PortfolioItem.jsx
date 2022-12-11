import { Box, Image, Text, Flex} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

// pass down as props in index
    
export default function PortfolioItem() {

    return (
        <Flex justifyContent='space-between' width='100%'>
            <Box>
                <Text>TeeTimes</Text>
                <Text></Text>
            </Box>

            <Image width='600px' objectFit='cover' src='/teetimes.gif'></Image>
        </Flex>
    )
}