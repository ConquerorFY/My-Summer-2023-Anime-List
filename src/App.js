import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AnimeListing from './pages/anime-listing';
import './styles/app.css'
import { useQuery } from 'react-query';
import { getAnimeList } from './services/api';
import Loader from './components/Loader';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function App() {
  // eslint-disable-next-line
  const [loadApp, setLoadApp] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { data: responseData, isSuccess, isLoading } = useQuery(['anime', currentPage], getAnimeList);

  useEffect(() => {
    if (isLoading && isFirstRender) {
      setLoadApp(false);
    }
    if (isSuccess && isFirstRender) {
      setTimeout(() => {
        setLoadApp(true);
      }, 22000);
      setIsFirstRender(false);
    }
  }, [isSuccess, isLoading, isFirstRender]);

  return (
    <>
      {
        !loadApp
          ? <Loader />
          : <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <div className="App">
              <Navbar />
              <AnimeListing responseData={responseData} currentPage={currentPage} setCurrentPage={setCurrentPage} isLoading={isLoading} />
              <Footer />
            </div>
          </motion.div>
      }
    </>
  );
}
