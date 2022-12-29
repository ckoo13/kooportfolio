import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";

import { Box, Flex, Image, Text, Stack } from "@chakra-ui/react";


export default function About() {

    const fetchTopTracks = async () => {
        const response = await fetch("/api/top-tracks");
        const data = await response.json();

        console.log(data);
    }
    
    return (
        <Flex flexDirection='column' alignItems='center'>
            <Navbar />

            <Flex flexDirection={{base:'column', md:'row', lg:'row'}} alignItems='center' justifyContent='space-between' width='100%' marginY={{base:'10', md:'20', lg:'20'}}>
                <Image marginLeft={{base:'0', md:'10', lg:'20'}} borderRadius='12px' marginBottom={{base:'10', md:'0', lg:'0'}} boxSize={{base: '250px', md:'250px', lg:'300px'}} objectFit="cover" src="/about.jpg"></Image>

                <Box width='60%' marginRight={{base:'0', md:'10', lg:'20'}}>
                    <Stack  spacing={3} textAlign='left'>
                        <Text fontFamily='Gotham' fontWeight='bold' fontSize={{base: '24px', md:'24px', lg:'32px'}}>Hi, my name is Calvin Koo!</Text>
                        <Text>I am a recent graduate of Claremont McKenna College with a degree in Economics and Asian Studies. In addition to my undergraduate degree, I recently completed a full-stack engineering bootcamp in App Academy where I honed my technical skills through building applications using technologies such as ReactJS and Ruby on Rails. I have always been passionate about building software products that can help to improve both businesses and the lives of everyday people at scale.</Text>
                        <Text>From founding my own product design club on campus at Claremont Marketing Group, working as an associate at a fast-paced growth company in AlphaSights, to working at a rapidly growing startup in Coda developing go-to-market growth strategies, my diverse range of expertise within the technology space provides me with a holistic approach in applying my technical skills. </Text>
                        <Text>I am always looking for new opportunities to grow and I am excited to see what the future holds. Please feel free to contact me at kkoo22@cmc.edu about any software engineering related roles you may have and thank you for checking out my site.</Text>
                    </Stack>
                </Box>
            </Flex>
        </Flex>
    )
};