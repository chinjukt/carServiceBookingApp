// PaginationComponent.js
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;
