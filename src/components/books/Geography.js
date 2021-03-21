import React, { useState } from "react";
import useSound from "use-sound";
import PDF from "react-pdf-js";

import geographyPdf from "./geography-1-20.pdf";

import geographyAudio from "../../audio/BooksAudio/geographyAudio.mp3";
import nextPageAudio from "../../audio/BooksAudio/nextPageAudio.mp3";
import prevPageAudio from "../../audio/BooksAudio/prevPageAudio.mp3";
import geog1 from "../../audio/GeographyBookAudio/geo-1.mp3";
import geog2 from "../../audio/GeographyBookAudio/geo-2.mp3";
import geog3 from "../../audio/GeographyBookAudio/geo-3.mp3";
import geog4 from "../../audio/GeographyBookAudio/geo-4.mp3";
import geog5 from "../../audio/GeographyBookAudio/geo-5.mp3";
import geog6 from "../../audio/GeographyBookAudio/geo-6.mp3";
import geog7 from "../../audio/GeographyBookAudio/geo-7.mp3";
import geog8 from "../../audio/GeographyBookAudio/geo-8.mp3";
import geog9 from "../../audio/GeographyBookAudio/geo-9.mp3";
import geog10 from "../../audio/GeographyBookAudio/geo-10.mp3";
import geog11 from "../../audio/GeographyBookAudio/geo-11.mp3";
import geog12 from "../../audio/GeographyBookAudio/geo-12.mp3";
import geog13 from "../../audio/GeographyBookAudio/geo-13.mp3";
import geog14 from "../../audio/GeographyBookAudio/geo-14.mp3";
import geog15 from "../../audio/GeographyBookAudio/geo-15.mp3";
import geog16 from "../../audio/GeographyBookAudio/geo-16.mp3";
import geog17 from "../../audio/GeographyBookAudio/geo-17.mp3";
import geog18 from "../../audio/GeographyBookAudio/geo-18.mp3";
import geog19 from "../../audio/GeographyBookAudio/geo-19.mp3";
import geog20 from "../../audio/GeographyBookAudio/geo-20.mp3";

const Geography = () => {
  const [pages, setPages] = useState();
  const [page, setPage] = useState();
  const [nextPlay, { stop: nextStop }] = useSound(nextPageAudio);
  const [prevPlay, { stop: prevStop }] = useSound(prevPageAudio);
  const pageAudios = [
    geog1,
    geog2,
    geog3,
    geog4,
    geog5,
    geog6,
    geog7,
    geog8,
    geog9,
    geog10,
    geog11,
    geog12,
    geog13,
    geog14,
    geog15,
    geog16,
    geog17,
    geog18,
    geog19,
    geog20,
  ];
  const [geographyPlay, { stop: geographyStop }] = useSound(geographyAudio);
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
          onMouseEnter={() => geographyPlay()}
          onMouseLeave={() => geographyStop()}
        >
          Geography
        </span>{" "}
        - Page <span className="">{page}</span> of{" "}
        <span className="">{pages}</span>
      </div>
      <div
        style={{ height: "793px", width: "595px", margin: "0 auto" }}
        onMouseOver={() => pagePlay()}
        onMouseOut={() => pageStop()}
      >
        <PDF
          className="border-2 border-blue-400 shadow-lg rounded-lg"
          file={geographyPdf}
          page={page}
          onDocumentComplete={onDocumentComplete}
        />
      </div>
      {pagination}
    </div>
  );
};

export default Geography;
