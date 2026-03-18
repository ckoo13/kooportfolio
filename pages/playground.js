import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Navbar from "../components/Navbar";
import PortfolioItem from "../components/PortfolioItem";
import Emoji from "../components/Emoji";

import { TeeTimes, Kooflix, VeloLaunch } from "../utils/portfolioitems";

import { Flex, Text, VStack, Heading, Box, Card, CardBody, Stack, Image, Spinner, Divider } from "@chakra-ui/react";

export default function Playground() {
    const [tracks, setTracks] = useState([]);
    const [emblaRef] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        fetchTopTracks();
    }, [])

    const fetchTopTracks = async () => {
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
        <Flex flexDirection='column' alignItems='center'>
            <Navbar />

            {/* Live Spotify Rotation */}
            <Box width='100%' display='flex' flexDirection='column' alignItems='center' paddingY={{base:'8', md:'10', lg:'12'}}>
                <Heading fontSize={{base:'24px', md:'28px', lg:'36px'}} fontWeight='bold' marginBottom={2}>
                    Live Spotify Rotation <Emoji symbol="🎵"/>
                </Heading>
                <Text fontSize={{base:'13px', md:'14px', lg:'15px'}} color='gray.500' marginBottom={6} textAlign='center' width={{base:'85%', md:'55%', lg:'40%'}}>
                    My top tracks updated daily via the Spotify API. Swipe to browse.
                </Text>
                {buildCarousel()}
            </Box>

            <Divider width={{base:'85%', md:'75%', lg:'65%'}} marginBottom={{base:'6', md:'8', lg:'10'}} />

            {/* Coding Projects */}
            <Text fontWeight='bold' marginBottom={{base:'1em', md:'1em', lg:'2em'}} fontSize={{base:'24px', md:'28px', lg:'36px'}}>
                Coding Projects <Emoji symbol="💻"/>
            </Text>
            <Text textAlign='center' width={{base:'85%', md:'55%', lg:'45%'}} marginBottom={{base:'2em', md:'2em', lg:'3em'}} fontSize={{base:'14px', md:'15px', lg:'16px'}}>
                Before pivoting to PE, I taught myself to code and built a few projects. Here&apos;s what I made.
            </Text>

            <VStack spacing={16} marginBottom='4em' width='100%'>
                <PortfolioItem project={TeeTimes} />
                <PortfolioItem project={Kooflix} />
                <PortfolioItem project={VeloLaunch} />
            </VStack>
        </Flex>
    )
}
