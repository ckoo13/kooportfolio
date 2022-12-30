import React from "react";
import { useState, useEffect, useRef } from "react";

export default function AudioPlayer({tracks}) {
    const [titles, setTitles] = useState([]);
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    

    const audioRef = useRef(new Audio())

    useEffect(() => {
        setTitles(tracks);
    })

    return (
        <div>Audio Player</div>
    )
};