import React from "react";

import Navbar from "../components/Navbar";
import PortfolioItem from "../components/PortfolioItem";
import Emoji from "../components/Emoji";

import { TeeTimes, Kooflix, VeloLaunch } from "../utils/portfolioitems";

import { Flex, Text, VStack } from "@chakra-ui/react";

export default function Playground() {
    return (
        <Flex flexDirection='column' alignItems='center'>
            <Navbar />

            <Text fontWeight='bold' marginTop={{base:'2em', md:'2em', lg:'3em'}} marginBottom={{base:'1em', md:'1em', lg:'2em'}} fontSize={{base:'24px', md:'28px', lg:'36px'}}>
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
