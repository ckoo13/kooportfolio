import React from "react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Navbar from "../components/Navbar";
import Emoji from "../components/Emoji";

import { Box, Flex, Image, Text, Stack, Heading, Divider } from "@chakra-ui/react";
import { Card, CardBody } from '@chakra-ui/react'
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
            return <Spinner marginY='20px' />;
        }
        return (
            <Box className="embla" overflow='hidden' maxWidth={{base: '85%', md:'40%', lg:'25%'}}>
                <Box className="embla__viewport" ref={emblaRef}>
                    <Box className="embla__container" display='flex' alignItems='center'>
                        {tracks.map((track, i) => (
                            <Card textAlign='center' key={i} maxW='sm' className="embla__slide" minWidth='0' flex='0 0 100%' marginX='20px' alignItems='center'>
                                <CardBody>
                                    <Stack alignItems='center'>
                                        <Image width={{base:'80px', md:'100px', lg:'100px'}} src={track.image} alt='album image'></Image>
                                        <Text fontWeight='bold' fontSize='sm'>{track.title}</Text>
                                        <Text fontSize='xs'>{track.artist}</Text>
                                    </Stack>
                                </CardBody>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        );
    }

    return (
        <Flex flexDirection='column' alignItems='center'>
            <Navbar />

            <Flex paddingY={{base:'8', md:'14', lg:'16'}} flexDirection={{base:'column', md:'row', lg:'row'}} alignItems='center' justifyContent='space-between' width='100%'>
                <Image marginLeft={{base:'0', md:'10', lg:'20'}} borderRadius='12px' marginBottom={{base:'8', md:'0', lg:'0'}} boxSize={{base: '220px', md:'250px', lg:'280px'}} objectFit="cover" src="/about2.JPG" alt="Calvin Koo"></Image>

                <Box width={{base:'90%', md:'60%', lg:'60%'}} marginRight={{base:'0', md:'10', lg:'20'}}>
                    <Stack spacing={3} textAlign='left'>
                        <Text fontFamily='Gotham' fontWeight='bold' fontSize={{base: '24px', md:'24px', lg:'32px'}}>Hi, my name is Calvin Koo!</Text>
                        <Text>I&apos;m a Private Equity investor at Sunstone Partners in San Mateo, where I focus on growth equity investments in tech-enabled services and software businesses. I graduated from Claremont McKenna College with a degree in Economics and Asian Studies.</Text>
                        <Text>I&apos;ve also completed a full-stack engineering bootcamp at App Academy, where I built applications in ReactJS and Ruby on Rails — which is how this site came to be. I&apos;m passionate about the intersection of technology, strategy, and business, and I write about what I&apos;m learning on Substack and Brunch Korea.</Text>
                        <Text>Feel free to reach out at kyungmkoo13@gmail.com — always happy to connect with fellow investors and builders.</Text>
                    </Stack>
                </Box>
            </Flex>

            <Box width={{base:'90%', md:'70%', lg:'60%'}} marginBottom={{base:'6', md:'8', lg:'10'}}>
                <Heading size='md' marginBottom={4}>Currently Watching</Heading>
                <Stack spacing={2} as='ul' styleType='disc' paddingLeft={5}>
                    <Text as='li'>Patent cliffs and post-2022/23 launch slowdowns driving renewed focus on post-market pharma functions like pharmacovigilance and medical affairs</Text>
                    <Text as='li'>Founder-built RCM and CDI businesses that have earned mission-critical status through strong organizational delivery, with a clear opportunity to layer in automation and AI to expand margins</Text>
                    <Text as='li'>Accelerating technology adoption in financial services driving demand for digital and core banking advisory</Text>
                    <Text as='li'>Korean and Asian technology markets</Text>
                </Stack>
            </Box>

            <Divider width={{base:'80%', md:'70%', lg:'60%'}} marginBottom={{base:'4', md:'6', lg:'8'}} />

            <Heading size='sm' marginBottom={4}>Currently Listening <Emoji symbol='🎵'/></Heading>
            {buildCarousel()}
            <Box marginBottom='3em' />
        </Flex>
    )
};
