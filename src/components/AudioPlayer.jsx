import React, { useEffect, useRef } from 'react';
import jjk from '../assets/video/jjk-op3.mp4';

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const bodyRef = document.querySelector('body');

    useEffect(() => {
        const handlePlayer = () => {
            // Ensure that the audio element exists
            if (audioRef.current) {
                // Play the audio once it's loaded
                audioRef.current.play();
            }
        }
        bodyRef.addEventListener('click', handlePlayer);

        return () => {
            bodyRef.removeEventListener('click', handlePlayer);
        }
    }, [bodyRef]);

    return (
        <div style={{ position: 'absolute' }}>
            <audio ref={audioRef} autoPlay={true} loop={false}>
                <source src={jjk} type="audio/mp4" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    );
};

export default AudioPlayer;