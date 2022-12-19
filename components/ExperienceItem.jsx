import React from "react";
import { useState, useEffect } from "react";

import { UnorderedList, ListItem, Box, Text, Heading } from "@chakra-ui/react";



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
    });

    return (
        <Box>
            <Heading>{role} @ {name}</Heading>
            <Text>{duration}</Text>
            <UnorderedList>
                {descriptions.map(item => {
                    return (
                        <ListItem>{item}</ListItem>
                    )
                })}
            </UnorderedList>
        </Box>
    )
}