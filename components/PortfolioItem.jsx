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
        <Flex justifyContent='space-between' width='100%'>
            <Box>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </Box>

            <Image width='600px' objectFit='cover' src='/teetimes.gif'></Image>
        </Flex>
    )
}