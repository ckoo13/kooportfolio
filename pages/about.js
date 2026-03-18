import React from "react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Navbar from "../components/Navbar";
import Emoji from "../components/Emoji";

import { Box, Flex, Image, Text, Stack, Heading, Divider, useColorModeValue } from "@chakra-ui/react";
import { Card, CardBody } from '@chakra-ui/react';
import { Spinner } from "@chakra-ui/react";


export default function About() {
    const [tracks, setTracks] = useState([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const panelBg = useColorModeValue('gray.50', 'whiteAlpha.100');

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
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {tracks.map((track, i) => (
                            <div className="embla__slide" key={i}>
                                <Card textAlign='center' alignItems='center'>
                                    <CardBody>
                                        <Stack alignItems='center'>
                                            <Image width='90px' src={track.image} alt='album image' />
                                            <Text fontWeight='bold' fontSize='sm'>{track.title}</Text>
                                            <Text fontSize='xs'>{track.artist}</Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Flex flexDirection='column' alignItems='center' width='100%'>
            <Navbar />

            {/* Bio Section */}
            <Flex
                paddingY={{base:'8', md:'12', lg:'16'}}
                paddingX={{base:'6', md:'10', lg:'16'}}
                flexDirection={{base:'column', md:'row', lg:'row'}}
                alignItems={{base:'center', md:'center', lg:'center'}}
                justifyContent='center'
                gap={{base:'6', md:'10', lg:'16'}}
                width='100%'
            >
                <Image
                    flexShrink={0}
                    borderRadius='12px'
                    boxSize={{base:'200px', md:'250px', lg:'280px'}}
                    objectFit="cover"
                    src="/about2.JPG"
                    alt="Calvin Koo"
                />

                <Stack spacing={3} textAlign='left' maxWidth={{base:'100%', md:'55%', lg:'55%'}}>
                    <Text fontFamily='Gotham' fontWeight='bold' fontSize={{base:'22px', md:'24px', lg:'32px'}}>Hi, my name is Calvin Koo!</Text>
                    <Text fontSize={{base:'14px', md:'15px', lg:'16px'}}>I&apos;m a Private Equity investor at Sunstone Partners in San Mateo, where I focus on growth equity investments in tech-enabled services and software businesses. I graduated from Claremont McKenna College with a degree in Economics and Asian Studies.</Text>
                    <Text fontSize={{base:'14px', md:'15px', lg:'16px'}}>I&apos;ve also completed a full-stack engineering bootcamp at App Academy, where I built applications in ReactJS and Ruby on Rails — which is how this site came to be. I&apos;m passionate about the intersection of technology, strategy, and business, and I write about what I&apos;m learning on Substack and Brunch Korea.</Text>
                    <Text fontSize={{base:'14px', md:'15px', lg:'16px'}}>Feel free to reach out at kyungmkoo13@gmail.com — always happy to connect with fellow investors and builders.</Text>
                </Stack>
            </Flex>

            {/* What I'm Seeing in the Market — floating panel */}
            <Box
                width={{base:'88%', md:'75%', lg:'60%'}}
                bg={panelBg}
                borderRadius='2xl'
                boxShadow='lg'
                paddingX={{base:'6', md:'8', lg:'10'}}
                paddingY={{base:'6', md:'7', lg:'8'}}
                marginBottom={{base:'8', md:'10', lg:'12'}}
            >
                <Heading size='sm' marginBottom={4}>What I&apos;m Seeing in the Market</Heading>
                <Stack spacing={3} as='ul' paddingLeft={4}>
                    <Text as='li' fontSize={{base:'14px', md:'15px', lg:'15px'}}>Patent cliffs and post-2022/23 launch slowdowns driving renewed focus on post-market pharma functions like pharmacovigilance and medical affairs</Text>
                    <Text as='li' fontSize={{base:'14px', md:'15px', lg:'15px'}}>Founder-built RCM and CDI businesses that have earned mission-critical status through strong organizational delivery, with a clear opportunity to layer in automation and AI to expand margins</Text>
                    <Text as='li' fontSize={{base:'14px', md:'15px', lg:'15px'}}>Accelerating technology adoption in financial services driving demand for digital and core banking advisory</Text>
                </Stack>
            </Box>

            <Divider width={{base:'88%', md:'75%', lg:'60%'}} />

            <Flex flexDirection='column' alignItems='center' paddingY={{base:'6', md:'8', lg:'10'}}>
                <Heading size='sm' marginBottom={4}>Currently Listening <Emoji symbol='🎵'/></Heading>
                {buildCarousel()}
            </Flex>
        </Flex>
    )
};
