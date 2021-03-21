import React, { useState, useRef, useEffect } from "react";
import useSound from "use-sound";
import PDF from "react-pdf-js";

import englishPdf from "./english-1-20.pdf";

import nextPageAudio from "../../audio/BooksAudio/nextPageAudio.mp3";
import prevPageAudio from "../../audio/BooksAudio/prevPageAudio.mp3";
import eng1 from "../../audio/EnglishBookAudio/eng-1.mp3";
import eng2 from "../../audio/EnglishBookAudio/eng-2.mp3";
import eng3 from "../../audio/EnglishBookAudio/eng-3.mp3";
import eng4 from "../../audio/EnglishBookAudio/eng-4.mp3";
import eng5 from "../../audio/EnglishBookAudio/eng-5.mp3";
import eng6 from "../../audio/EnglishBookAudio/eng-6.mp3";
import eng7 from "../../audio/EnglishBookAudio/eng-7.mp3";
import eng8 from "../../audio/EnglishBookAudio/eng-8.mp3";
import eng9 from "../../audio/EnglishBookAudio/eng-9.mp3";
// import eng10 from "../../audio/EnglishBookAudio/eng-10.mp3";
import eng11 from "../../audio/EnglishBookAudio/eng-11.mp3";
// import eng12 from "../../audio/EnglishBookAudio/eng-12.mp3";
import eng13 from "../../audio/EnglishBookAudio/eng-13.mp3";
import eng14 from "../../audio/EnglishBookAudio/eng-14.mp3";
import eng15 from "../../audio/EnglishBookAudio/eng-15.mp3";
import eng16 from "../../audio/EnglishBookAudio/eng-16.mp3";
import eng17 from "../../audio/EnglishBookAudio/eng-17.mp3";
import eng18 from "../../audio/EnglishBookAudio/eng-18.mp3";
import eng19 from "../../audio/EnglishBookAudio/eng-19.mp3";
import eng20 from "../../audio/EnglishBookAudio/eng-20.mp3";

const English = () => {
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
  const pageAudios = [
    eng1,
    eng2,
    eng3,
    eng4,
    eng5,
    eng6,
    eng7,
    eng8,
    eng9,
    // eng10,
    eng11,
    // eng12,
    eng13,
    eng14,
    eng15,
    eng16,
    eng17,
    eng18,
    eng19,
    eng20,
  ];
  const [nextPlay, { stop: nextStop }] = useSound(nextPageAudio);
  const [prevPlay, { stop: prevStop }] = useSound(prevPageAudio);
  const [pagePlay, { stop: pageStop }] = useSound(pageAudios[page - 1]);

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
          onMouseEnter={() => prevPlay()}
          onMouseLeave={() => prevStop()}
        >
          {" "}
          <i class="fas fa-arrow-circle-left"></i> Prev
        </button>
        <button
          disabled={page === pages}
          className="focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r transition-all duration-300 ease-out"
          onClick={handleNext}
          onMouseEnter={() => nextPlay()}
          onMouseLeave={() => nextStop()}
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
      <div
        style={{ height: "793px", width: "595px", margin: "0 auto" }}
        onMouseOver={() => pagePlay()}
        onMouseOut={() => pageStop()}
      >
        <PDF
          className="border-2 border-blue-400 shadow-lg rounded-lg"
          file={englishPdf}
          page={page}
          onDocumentComplete={onDocumentComplete}
        />
      </div>
      {pagination}
    </div>
  );
};

export default English;
