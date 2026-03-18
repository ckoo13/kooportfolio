import { Box, Image, Text, Flex, Button, Link} from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';

// pass down as props in index


export default function PortfolioItem({project}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [projectType, setProjectType] = useState('');
    const [githubLink , setGithubLink] = useState('');
    const [liveLink, setLiveLink] = useState('');
    const [lowerTitle, setLowerTitle] = useState('');

    useEffect(() => {
        setTitle(project.title);
        setDescription(project.description);
        setProjectType(project.projectType);
        setGithubLink(project.githubLink);
        setLiveLink(project.liveLink);
        setLowerTitle(project.lowerTitle)
    }, []);

    // const projectImage = () => {
    //     const src = `/${title}.png`;

    //     return (
    //         <Image cursor='pointer' boxShadow='lg' width={{base:'100%', md:'50%', lg:'50%'}} padding={{base:'5', md:'5', lg:'5'}}  marginX={{base:'0', md:'20', lg:'20'}} src={src} alt='image not loaded'></Image>
    //     )
    // }

    const src = `/${lowerTitle}.jpg`;

    return (
        <Flex flexDirection={{base:'column', md:'row', lg:'row'}} alignItems={{base:'center', md:'center', lg:'center'}} width='100%'>
            <Flex textAlign='center' flexDirection='column' gap='5' marginX={{base:'4', md:'10', lg:'20'}} alignItems='center'>
                <Text fontSize={{base:'28px', md:'36px', lg:'40px'}} fontWeight='bolder'>{title}</Text>
                <Text fontStyle='italic'>{projectType}</Text>
                <Text>{description}</Text>
                {/* need to add on click event for view project button */}
    
                <Button as='a' href={liveLink} target='_blank' rel='noreferrer' w={{base:'70%', md:'40%', lg:'40%'}}>Live Link</Button>
                <Button as='a' href={githubLink} target='_blank' rel='noreferrer' w={{base:'70%', md:'40%', lg:'40%'}}>Github Repo</Button>
            </Flex>
            
            
            <Image cursor='pointer' boxShadow='lg' width={{base:'100%', md:'50%', lg:'50%'}} padding={{base:'5', md:'5', lg:'5'}}  marginX={{base:'0', md:'20', lg:'20'}} src={src} alt='image not loaded'></Image>
        </Flex>
    )
}