import React from "react";
import { useState, useEffect } from "react";

import { UnorderedList, ListItem, Stack, Text, Heading } from "@chakra-ui/react";



export default function ExperienceItem({item}) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [duration, setDuration] = useState('');
    const [descriptions, setDescriptions] = useState([]);

    useEffect(() => {
        setName(item.company);
        setRole(item.role);
        setDuration(item.duration);
        setDescriptions(item.descriptions);
    }, []);

    return (
        <Stack spacing={{base:2, md:3, lg:3}}>
            <Heading size={{base:'sm', md:'md', lg:'md'}} >{role} @ {name}</Heading>
            <Text fontStyle='italic'>{duration}</Text>
            <UnorderedList spacing={{base:1, md:1, lg:1}}>
                {descriptions.map(item => {
                    return (
                        <ListItem key={item}>{item}</ListItem>
                    )
                })}
            </UnorderedList>
        </Stack>
    )
}