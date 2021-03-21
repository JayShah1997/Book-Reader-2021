import React, { useState } from "react";
import PDF from "react-pdf-js";

import englishPdf from "./english-1-20.pdf";

const English = () => {
  const [pages, setPages] = useState();
  const [page, setPage] = useState();

  const onDocumentComplete = (pages) => {
    setPage(1);
    setPages(pages);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const renderPagination = () => {
    return (
      <div className="text-center mt-4">
        <button
          disabled={page === 1}
          className="mr-4 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l transition-all duration-300 ease-out"
          onClick={handlePrevious}
        >
          {" "}
          <i class="fas fa-arrow-circle-left"></i> Prev
        </button>
        <button
          disabled={page === pages}
          className="focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r transition-all duration-300 ease-out"
          onClick={handleNext}
        >
          {" "}
          <i class="fas fa-arrow-circle-right"></i> Next
        </button>
      </div>
    );
  };

  let pagination = null;

  if (pages) {
    pagination = renderPagination();
  }

  return (
    <div>
      <div className="text-center mb-1">
        <span className="font-bold">English</span> - Page{" "}
        <span className="">{page}</span> of <span className="">{pages}</span>
      </div>
      <PDF
        className="border-2 border-blue-400 shadow-lg rounded-lg"
        file={englishPdf}
        page={page}
        onDocumentComplete={onDocumentComplete}
      />
      {pagination}
    </div>
  );
};

export default English;
