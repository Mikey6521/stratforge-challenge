import React, { useState, useEffect, useRef } from 'react';
import useDebounce from '../customHooks/useDebounce';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const [inputPage, setInputPage] = useState<string | number>(currentPage);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedPage = useDebounce(inputPage, 500);

  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (debouncedPage !== '' && debouncedPage !== currentPage) {
      const pageNumber = Number(debouncedPage);
      if (pageNumber < 1) {
        onPageChange(1);
      } else if (pageNumber > totalPages) {
        onPageChange(totalPages);
      } else {
        onPageChange(pageNumber);
      }
    }
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }, [debouncedPage, currentPage, onPageChange, totalPages]);

  const handleInputPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPage(value === '' ? '' : parseInt(value));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setInputPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setInputPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-between mt-4 items-center">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Previous
      </button>

      <div className="flex items-center space-x-2">
        <p>Page</p>
        <input
          type="number"
          value={inputPage === '' ? '' : inputPage}
          onChange={handleInputPageChange}
          className="w-12 text-center border border-gray-300 rounded"
          min={1}
          max={totalPages}
          ref={inputRef}
        />
        <p>of {totalPages}</p>
      </div>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
