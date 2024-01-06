import '../styles/loader.css';
import jjk from '../assets/video/jjk-op3.mp4';
import { useRef, useEffect } from 'react';

export default function Loader() {
    const videoRef = useRef(null);

    // in case autoplay does not work 
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
            {/* in case autoplay does not work  */}
            <video ref={videoRef} loop={false} muted={true}>
            {/* <video ref={videoRef} autoPlay={true} loop={false} muted={true}> */}
                <source src={jjk} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}