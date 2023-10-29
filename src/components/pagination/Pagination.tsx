import {FC} from "react";

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({currentPage, totalPages, onPageChange}) => {

    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const displayLimit = 10; // Maximum number of pages to display

        let startPage = Math.max(1, currentPage - Math.floor(displayLimit / 2));
        let endPage = Math.min(totalPages, startPage + displayLimit - 1);

        for (let number = startPage; number <= endPage; number++) {
            pageNumbers.push(
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(number)}>{number}</button>
                </li>
            );
        }
        return pageNumbers;
    }
    return (
        <nav aria-label="page-navigation">
            <ul className="pagination d-flex justify-content-center pt-5">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" aria-disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}>{'<<'}</button>
                </li>
                {renderPageNumbers()}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>{'>>'}</button>
                </li>
            </ul>
        </nav>
    );
};
