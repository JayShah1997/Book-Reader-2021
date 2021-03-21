import React, { useState } from "react";
import useSound from "use-sound";
import PDF from "react-pdf-js";

import historyPdf from "./history-1-10.pdf";

import historyAudio from "../../audio/BooksAudio/historyAudio.mp3";
import nextPageAudio from "../../audio/BooksAudio/nextPageAudio.mp3";
import prevPageAudio from "../../audio/BooksAudio/prevPageAudio.mp3";
import his1 from "../../audio/HistoryBookAudio/his-1.mp3";
import his2 from "../../audio/HistoryBookAudio/his-2.mp3";
import his3 from "../../audio/HistoryBookAudio/his-3.mp3";
import his4 from "../../audio/HistoryBookAudio/his-4.mp3";
import his5 from "../../audio/HistoryBookAudio/his-5.mp3";
import his6 from "../../audio/HistoryBookAudio/his-6.mp3";
import his7 from "../../audio/HistoryBookAudio/his-7.mp3";
import his8 from "../../audio/HistoryBookAudio/his-8.mp3";
import his9 from "../../audio/HistoryBookAudio/his-9.mp3";
import his10 from "../../audio/HistoryBookAudio/his-10.mp3";

const History = () => {
  const [pages, setPages] = useState();
  const [page, setPage] = useState();
  const pageAudios = [
    his1,
    his2,
    his3,
    his4,
    his5,
    his6,
    his7,
    his8,
    his9,
    his10,
  ];
  const [historyPlay, { stop: historyStop }] = useSound(historyAudio);
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
        <span
          className="font-bold"
          onMouseEnter={() => historyPlay()}
          onMouseLeave={() => historyStop()}
        >
          History
        </span>{" "}
        - Page <span className="">{page}</span> of{" "}
        <span className="">{pages}</span>
      </div>
      <div
        style={{ height: "730px", width: "595px", margin: "0 auto" }}
        onMouseOver={() => pagePlay()}
        onMouseOut={() => pageStop()}
      >
        <PDF
          className="border-2 border-blue-400 shadow-lg rounded-lg"
          file={historyPdf}
          page={page}
          onDocumentComplete={onDocumentComplete}
        />
      </div>
      {pagination}
    </div>
  );
};

export default History;
