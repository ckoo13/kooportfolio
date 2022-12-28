import React from "react";

import Navbar from "../components/Navbar";

import { Box, Flex, Image, Text } from "@chakra-ui/react";


export default function About() {
    return (
        <Flex flexDirection='column' alignItems='center'>
            <Navbar />

            <Flex justifyContent='space-between' width='100%'>
                <Image marginLeft={{base:'0', md:'10', lg:'20'}} borderRadius='12px' boxSize={{base: '250px', md:'250px', lg:'300px'}} objectFit="cover" src="/about.jpg"></Image>

                <Box width='60%'>
                    <Text fontSize={{base: '12px', md:'16px', lg:'18px'}}>Hi, my name is Calvin Koo! I am a recent graduate of Claremont McKenna College with a degree in Economics and Asian Studies. In addition to my undergraduate degree, I recently completed a full-stack engineering bootcamp in App Academy where I honed my technical skills through building applications using technologies such as ReactJS and Ruby on Rails. I have always been passionate about building software products that can help to improve both businesses and the lives of everyday people at scale.
From founding my own product design club on campus at Claremont Marketing Group, working as an associate at a fast-paced growth company in AlphaSights, to working at a rapidly growing startup in Coda developing go-to-market growth strategies, my diverse range of expertise within the technology space provides me with a holistic approach in applying my technical skills. 
Outside of work, I enjoy playing basketball with friends, going to theaters, and visiting every MLB ballpark. 
I am always looking for new opportunities to grow and I’m excited to see what the future holds. Please feel free to contact me at kkoo22@cmc.edu about any software engineering related roles you may have and thank you for checking out my site.
</Text>
                </Box>
            </Flex>
        </Flex>
    )
}