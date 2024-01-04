import { useEffect, useRef } from 'react';
import '../styles/anime-detail-popup.css';

export default function AnimeDetailPopup({ selectedAnime, setIsShowDetail }) {
    const containerRef = useRef();
    const backgroundRef = useRef();

    useEffect(() => {
        if (containerRef.current) {
            backgroundRef.current.style.top = `${window.scrollY}px`;
            var childBottomPosition = backgroundRef.current.offsetTop + backgroundRef.current.offsetHeight;
            if (childBottomPosition - 20 > containerRef.current.clientHeight) {
                // overflow
                backgroundRef.current.style.top = 'auto';
            } else {
                backgroundRef.current.style.top = `${window.scrollY}px`;
            }
        }
    })

    return (
        <div className='detail-container' ref={containerRef}>
            <div className='detail-background' ref={backgroundRef}>
                <span className='close-btn' onClick={() => { setIsShowDetail(false) }}>X</span>
                {selectedAnime.trailer.embed_url ? <div className='video-container'>
                    <iframe
                        src={selectedAnime.trailer.embed_url}
                        frameBorder="0"
                        allowFullScreen
                        title="anime-detail-iframe"
                    ></iframe>
                </div> : ''}
                <img src={selectedAnime.images.jpg.image_url} alt='anime-detail-img' />
                <table>
                    <tbody>
                        <tr>
                            <td>Title: </td>
                            <td>{`${selectedAnime.title_english} (EN); ${selectedAnime.title_japanese} (JP)`}</td>
                        </tr>
                        <tr>
                            <td>Aired: </td>
                            <td>{`From ${selectedAnime.aired.string}`}</td>
                        </tr>
                        <tr>
                            <td>Duration: </td>
                            <td>{selectedAnime.duration}</td>
                        </tr>
                        <tr>
                            <td>Genre(s): </td>
                            <td>{selectedAnime.genres.map(g => g.name).join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Demographics: </td>
                            <td>{selectedAnime.demographics.map(d => d.name).join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Score: </td>
                            <td>{`${selectedAnime.score}/10`}</td>
                        </tr>
                        {selectedAnime.season ? <tr>
                            <td>Season: </td>
                            <td>{`${selectedAnime.season[0].toUpperCase()}${selectedAnime.season.slice(1)}`}</td>
                        </tr> : ''}
                        <tr>
                            <td>Year: </td>
                            <td>{selectedAnime.year}</td>
                        </tr>
                        <tr>
                            <td>Studio(s): </td>
                            <td>{selectedAnime.studios.map(s => s.name).join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Producer(s): </td>
                            <td>{selectedAnime.producers.map(p => p.name).join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Status: </td>
                            <td>{selectedAnime.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}