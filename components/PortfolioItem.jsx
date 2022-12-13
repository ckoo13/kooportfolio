import { Box, Image, Text, Flex} from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';

// pass down as props in index


export default function PortfolioItem({project}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [projectType, setProjectType] = useState('');

    useEffect(() => {
        setTitle(project.title);
        setDescription(project.description);
        setProjectType(project.projectType);
    })

    return (
        <Flex flexDirection={{base:'column', md:'row', lg:'row'}} justifyContent='space-between' width='100%' >
            <Box textAlign='center' marginX={{base:'10', md:'20', lg:'20'}} >
                <Text fontSize={{base:'32px', md:'40px', lg:'40px'}}>{title}</Text>
                <Text>{description}</Text>
            </Box>

            <Image width={{base:'100%', md:'50%', lg:'50%'}} objectFit='cover' marginX={{base:'10', md:'20', lg:'20'}} src='/teetimes.png'></Image>
        </Flex>
    )
}