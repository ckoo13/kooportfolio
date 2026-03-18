import React from "react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Navbar from "../components/Navbar";
import Emoji from "../components/Emoji";

import { Box, Flex, Image, Text, Stack, Heading, Button } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Spinner } from "@chakra-ui/react";


export default function About() {
    const [tracks, setTracks] = useState([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        fetchTopTracks();
    }, [])

    const fetchTopTracks = async() => {
        const response = await fetch(`/api/top-tracks`);
        const data = await response.json();

        setTracks(data);
    }

    const buildCarousel = () => {
        if (tracks.length == 0) {
            return (
                <Spinner marginTop={{base:'10px', md:'20px', lg:'100px'}} />
            )
        }
        else {
            return (
                <>
                    <Heading marginTop={{base:'10px', md:'20px', lg:'100px'}} size='md'>Scroll for my favorite tunes updated daily <Emoji symbol='🎵'/></Heading>
                    <Box className="embla" overflow='hidden' maxWidth={{base: '85%', md:'40%', lg:'25%'}}>
                        <Box className="embla__viewport" ref={emblaRef}>
                            <Box className="embla__container" display='flex' alignItems='center'>
                                {tracks.map((track, i) => {
                                    return (
                                        <Card textAlign='center' key={i} maxW='sm' className="embla__slide" minWidth='0' flex='0 0 100%' marginX='20px' alignItems='center'>
                                            <CardBody>
                                                <Stack alignItems='center'>
                                                    <Image width={{base:'100px', md:'150px', lg:'150px'}} src={track.image} alt='album image'></Image>
                                                    <Heading size='md'>{track.title}</Heading>
                                                    <Text>{track.artist}</Text>
                                                </Stack>
                                            </CardBody>
                                        </Card>
                                    )
                                })}
                            </Box>
                        </Box>
                    </Box>
                </>
            )
        }
    }
    
    return (
        <Flex flexDirection='column' alignItems='center'>
            <Navbar />

            <Flex paddingY={{base:'10', md:'20', lg:'20'}} flexDirection={{base:'column', md:'row', lg:'row'}} alignItems='center' justifyContent='space-between' width='100%'>
                <Image marginLeft={{base:'0', md:'10', lg:'20'}} borderRadius='12px' marginBottom={{base:'10', md:'0', lg:'0'}} boxSize={{base: '250px', md:'250px', lg:'300px'}} objectFit="cover" src="/about.jpg"></Image>

                <Box width={{base:'90%', md:'60%', lg:'60%'}} marginRight={{base:'0', md:'10', lg:'20'}}>
                    <Stack spacing={3} textAlign='left'>
                        <Text fontFamily='Gotham' fontWeight='bold' fontSize={{base: '24px', md:'24px', lg:'32px'}}>Hi, my name is Calvin Koo!</Text>
                        <Text>I&apos;m a Private Equity investor at Sunstone Partners in San Mateo, where I focus on growth and buyout investments in tech-enabled services and software businesses. I graduated from Claremont McKenna College with a degree in Economics and Asian Studies in 2022.</Text>
                        <Text>Prior to Sunstone, I worked at AlphaSights leading a Private Equity account worth $2B in AUM. I&apos;ve also completed a full-stack engineering bootcamp at App Academy, where I built applications in ReactJS and Ruby on Rails — which is how this site came to be.</Text>
                        <Text>I&apos;m passionate about the intersection of technology, strategy, and business, and I write about what I&apos;m learning and observing on Substack and Brunch Korea. Feel free to reach out at kyungmkoo13@gmail.com — always happy to connect with fellow investors and builders.</Text>
                    </Stack>
                </Box>
            </Flex>
            
            <Text fontSize={{base:'2em', md:'2em', lg: '2em'}} ><Emoji symbol='👇' /></Text>
            
            {buildCarousel()}
        </Flex>
    )
};
