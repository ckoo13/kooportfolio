import React from "react";
import { useState, useEffect, useRef } from "react";

export default function AudioPlayer({tracks}) {
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        setTitles(tracks);
    })

    return (
        <div>Audio Player</div>
    )
};