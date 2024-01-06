import AnimeListItem from '../../components/AnimeListItem';
import '../../styles/anime-listing.css';
import AnimeDetailPopup from '../../components/AnimeDetailPopup';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from '../../components/Pagination';

export default function AnimeListing({ responseData, currentPage, setCurrentPage, isLoading }) {
    const [isShowDetail, setIsShowDetail] = useState(false);
    const [selectedAnime, setSelectedAnime] = useState({});
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setStartAnimation(true);
        }, 5000);
        return () => clearTimeout(delayTimer);
    }, []);

    // console.log(responseData);
    return isLoading ? <main></main> : (
        <main>
            {isShowDetail ? <AnimeDetailPopup selectedAnime={selectedAnime} setIsShowDetail={setIsShowDetail} /> : ''}
            <h1>All Animes in Summer 2023</h1>
            <Pagination currentPage={currentPage} totalPages={responseData.pagination.last_visible_page} setCurrentPage={setCurrentPage} />
            <div className='anime-list-container'>
                <AnimatePresence>
                    {
                        startAnimation && responseData.data.map((anime, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                            >
                                <AnimeListItem key={index} anime={anime} setSelectedAnime={setSelectedAnime} setIsShowDetail={setIsShowDetail} />
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </main>
    );
}
