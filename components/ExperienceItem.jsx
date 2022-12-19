import React from "react";
import { useState, useEffect } from "react";

import { UnorderedList, ListItem } from "@chakra-ui/react";



export default function ExperienceItem({company}) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [duration, setDuration] = useState('');
    const [descriptions, setDescriptions] = useState([]);

    useEffect(() => {
        setName(company.company);
        setRole(company.role);
        setDuration(company.duration);
        setDescriptions(company.descriptions);
    });

    return (
        <UnorderedList>
            
        </UnorderedList>
    )
}