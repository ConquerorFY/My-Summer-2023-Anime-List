import '../styles/loader.css';
import jjk from '../assets/video/jjk-op3.mp4';
import { useEffect, useRef } from 'react';

export default function Loader() {
    const videoRef = useRef(null);
    const bodyRef = document.querySelector('body');

    useEffect(() => {
        bodyRef.addEventListener('click', () => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        });
    });

    return (
        <div className="loader-container">
            <video ref={videoRef} loop={true} muted={true}>
                <source src={jjk} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}