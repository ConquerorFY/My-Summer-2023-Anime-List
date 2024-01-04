import '../styles/pagination.css'

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
    const handleLeftButton = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleRightButton = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="pagination-container">
            <span className='left' onClick={handleLeftButton}>&lt;</span>
            <span className='indicator'>Page {currentPage} of {totalPages}</span>
            <span className='right' onClick={handleRightButton}>&gt;</span>
        </div>
    )
}