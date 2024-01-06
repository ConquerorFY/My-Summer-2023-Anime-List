import React, { useEffect, useRef, useState } from 'react';
import jjk from '../assets/video/jjk-op3.mp4';

const AudioPlayer = ({ bodyRef }) => {
// const AudioPlayer = () => {
    const audioRef = useRef(null);
    // in case autoplay does not work 
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        const handlePlayer = () => {
            // Ensure that the audio element exists
            if (audioRef.current && !hasPlayed) {
                // Play the audio once it's loaded
                audioRef.current.play();
                setHasPlayed(true);
            }
        }
        bodyRef.addEventListener('click', handlePlayer);
        return () => {
            bodyRef.removeEventListener('click', handlePlayer);
        }
    }, [bodyRef, hasPlayed]);

    // in case autoplay works (not sure what the status is now)
    // useEffect(() => {
    //     if (audioRef.current && !hasPlayed) {
    //         // Play the audio once it's loaded
    //         audioRef.current.play();
    //         setHasPlayed(true);
    //     }
    // }, [hasPlayed]);

    return (
        <div style={{ position: 'absolute' }}>
            {/* <audio ref={audioRef} autoPlay={true} loop={false}> */}
            <audio ref={audioRef} controls={false} loop={false}>
                <source src={jjk} type="audio/mp4" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    );
};

export default AudioPlayer;