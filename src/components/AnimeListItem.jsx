import { useEffect, useRef, useState } from 'react';
import '../styles/anime-list-item.css';

export default function AnimeListItem({ anime, setSelectedAnime, setIsShowDetail }) {
    const itemContainerRef = useRef();
    const [onHover, setOnHover] = useState(false);

    useEffect(() => {
        itemContainerRef.current.addEventListener('mouseenter', function () {
            setOnHover(true);
        });
        itemContainerRef.current.addEventListener('mouseleave', function () {
            setOnHover(false);
        });
    }, []);

    const handleOnClick = () => {
        setSelectedAnime(anime);
        setIsShowDetail(true);
    }

    return (
        <div className='item-container' ref={itemContainerRef} style={{ backgroundImage: `url('${anime.images.jpg.image_url}')` }} title="Click to learn more" onClick={handleOnClick}>
            {onHover ? <div className='item-detail'>
                <span className='title'>{anime.title}</span>
                <span className='episode'>Episodes: {anime.episodes}</span>
                <span className='status'>Status: {anime.status}</span>
                <span className='rating'>Score: {anime.score} / 10</span>
                <span className='rank'>Rank: {anime.rank}</span>
            </div> : ''}
        </div>
    );
}