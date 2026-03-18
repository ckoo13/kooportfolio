import React from "react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Navbar from "../components/Navbar";
import Emoji from "../components/Emoji";

import { Box, Flex, Image, Text, Stack, Heading, Divider, Button } from "@chakra-ui/react";
import { Card, CardBody } from '@chakra-ui/react';
import { Spinner } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react";


export default function About() {
    const [tracks, setTracks] = useState([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const { isOpen, onOpen, onClose } = useDisclosure();

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

            <Flex paddingY={{base:'8', md:'14', lg:'16'}} flexDirection={{base:'column', md:'row', lg:'row'}} alignItems='center' justifyContent='center' gap={{base:'6', md:'10', lg:'16'}} width='100%' paddingX={{base:'4', md:'10', lg:'16'}}>
                <Image flexShrink={0} borderRadius='12px' marginBottom={{base:'4', md:'0', lg:'0'}} boxSize={{base: '220px', md:'250px', lg:'280px'}} objectFit="cover" src="/about2.JPG" alt="Calvin Koo"></Image>

                <Box width={{base:'90%', md:'55%', lg:'55%'}}>
                    <Stack spacing={4} textAlign='left'>
                        <Text fontFamily='Gotham' fontWeight='bold' fontSize={{base: '24px', md:'24px', lg:'32px'}}>Hi, my name is Calvin Koo!</Text>
                        <Text>I&apos;m a Private Equity investor at Sunstone Partners in San Mateo, where I focus on growth equity investments in tech-enabled services and software businesses. I graduated from Claremont McKenna College with a degree in Economics and Asian Studies.</Text>
                        <Text>I&apos;ve also completed a full-stack engineering bootcamp at App Academy, where I built applications in ReactJS and Ruby on Rails — which is how this site came to be. I&apos;m passionate about the intersection of technology, strategy, and business, and I write about what I&apos;m learning on Substack and Brunch Korea.</Text>
                        <Text>Feel free to reach out at kyungmkoo13@gmail.com — always happy to connect with fellow investors and builders.</Text>
                        <Box>
                            <Button size='sm' onClick={onOpen}>Currently Watching</Button>
                        </Box>
                    </Stack>
                </Box>
            </Flex>

            {/* Currently Watching Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size={{base:'full', md:'lg', lg:'lg'}} isCentered>
                <ModalOverlay backdropFilter='blur(4px)' />
                <ModalContent>
                    <ModalHeader>Currently Watching</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody paddingBottom={6}>
                        <Stack spacing={4} as='ul' styleType='disc' paddingLeft={4}>
                            <Text as='li'>Patent cliffs and post-2022/23 launch slowdowns driving renewed focus on post-market pharma functions like pharmacovigilance and medical affairs</Text>
                            <Text as='li'>Founder-built RCM and CDI businesses that have earned mission-critical status through strong organizational delivery, with a clear opportunity to layer in automation and AI to expand margins</Text>
                            <Text as='li'>Accelerating technology adoption in financial services driving demand for digital and core banking advisory</Text>
                            <Text as='li'>Korean and Asian technology markets</Text>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Divider />

            <Flex flexDirection='column' alignItems='center' paddingY={{base:'6', md:'8', lg:'10'}}>
                <Heading size='sm' marginBottom={4}>Currently Listening <Emoji symbol='🎵'/></Heading>
                {buildCarousel()}
            </Flex>
        </Flex>
    )
};
