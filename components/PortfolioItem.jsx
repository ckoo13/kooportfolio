import { Box, Image, Text, Flex, Button} from '@chakra-ui/react';
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
        <Flex bgColor='tomato' flexDirection={{base:'column', md:'row', lg:'row'}} alignItems={{base:'center', md:'center', lg:'center'}} width='100%'>
            <Flex textAlign='center' flexDirection='column' gap='5' marginX={{base:'10', md:'10', lg:'20'}} marginBottom={{base:'10', md:'10', lg:'20'}} justifyContent='center'>
                <Text fontSize={{base:'32px', md:'40px', lg:'40px'}} fontWeight='bolder'>{title}</Text>
                <Text fontStyle='italic'>{projectType}</Text>
                <Text>{description}</Text>
                {/* need to add on click event for view project button */}
                <Button>View Project</Button>
            </Flex>

            <Image width={{base:'100%', md:'50%', lg:'50%'}}  marginX={{base:'0', md:'20', lg:'20'}} src='/teetimes.png'></Image>
        </Flex>
    )
}