import React from "react";
import useSound from "use-sound";
import { Link } from "react-router-dom";

import titleAudio from "../audio/BooksAudio/titleAudio.mp3";
import ctaAudio from "../audio/BooksAudio/ctaAudio.mp3";
import englishAudio from "../audio/BooksAudio/englishAudio.mp3";
import historyAudio from "../audio/BooksAudio/historyAudio.mp3";
import geographyAudio from "../audio/BooksAudio/geographyAudio.mp3";
import englishTitleAudio from "../audio/BooksAudio/englishTitleAudio.mp3";
import historyTitleAudio from "../audio/BooksAudio/historyTitleAudio.mp3";
import geographyTitleAudio from "../audio/BooksAudio/geographyTitleAudio.mp3";

const responsiveVoice = window.responsiveVoice;

const Books = () => {
  const [titlePlay, { stop: titleStop }] = useSound(titleAudio);
  const [ctaPlay, { stop: ctaStop }] = useSound(ctaAudio);
  const [englishPlay, { stop: englishStop }] = useSound(englishAudio);
  const [historyPlay, { stop: historyStop }] = useSound(historyAudio);
  const [geographyPlay, { stop: geographyStop }] = useSound(geographyAudio);
  const [englishTitlePlay, { stop: englishTitleStop }] = useSound(
    englishTitleAudio
  );
  const [historyTitlePlay, { stop: historyTitleStop }] = useSound(
    historyTitleAudio
  );
  const [geographyTitlePlay, { stop: geographyTitleStop }] = useSound(
    geographyTitleAudio
  );

  return (
    <div className="relative lg:px-32 " style={{ minHeight: "65vh" }}>
      <h1
        className="text-6xl text-center mt-32  font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-green-500"
        onMouseEnter={() => titlePlay()}
        onMouseLeave={() => titleStop()}
      >
        <i class="fas fa-book"></i> Read Books
      </h1>

      <div className="mt-16  space-x-8 flex ">
        <div className="text-center w-1/3 bg-white rounded shadow-lg  pt-16 pb-16  px-4 transform  hover:-translate-y-4 hover:shadow-xl transition duration-500 border-t-8  border-green-700">
          <i class="text-transparent bg-clip-text bg-gradient-to-r from-green-600  to-blue-600 fas fa-pen text-6xl mb-8"></i>
          <h3
            className="text-4xl  uppercase mb-6 text-gray-900 font-bold tracking-wide"
            onMouseEnter={() => englishPlay()}
            onMouseLeave={() => englishStop()}
          >
            English
          </h3>
          <p
            className="text-xl"
            onMouseEnter={() => englishTitlePlay()}
            onMouseLeave={() => englishTitleStop()}
          >
            To be, or not to be that is the question
            <br /> - Shakesphere
          </p>
          <Link
            to="/books/english"
            class="relative inline-block my-8 lg:mb-8 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500 "
            onMouseEnter={() => ctaPlay()}
            onMouseLeave={() => ctaStop()}
          >
            Read Book
          </Link>
        </div>
        <div className="text-center w-1/3 bg-white p-6 rounded shadow-lg pt-16 pb-16  transform  hover:-translate-y-4 hover:shadow-xl transition duration-500 border-t-8  border-green-700">
          <i class="text-transparent bg-clip-text bg-gradient-to-r from-green-600  to-blue-600  far fa-compass text-6xl mb-8"></i>
          <h3
            className="text-4xl  uppercase mb-6 text-gray-900 font-bold tracking-wide"
            onMouseEnter={() => historyPlay()}
            onMouseLeave={() => historyStop()}
          >
            History
          </h3>
          <p
            className="text-xl"
            onMouseEnter={() => historyTitlePlay()}
            onMouseLeave={() => historyTitleStop()}
          >
            Those who forget the past are condemn to repeat it
          </p>
          <Link
            to="/books/history"
            class="relative inline-block my-8 lg:mb-8 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500"
            onMouseEnter={() => ctaPlay()}
            onMouseLeave={() => ctaStop()}
          >
            Read Book
          </Link>
        </div>
        <div className="text-center w-1/3 bg-white p-6 rounded shadow-lg pt-16 pb-16 px-1  transform  hover:-translate-y-4 hover:shadow-xl transition duration-500 border-t-8  border-green-700">
          <i class="text-transparent bg-clip-text bg-gradient-to-r from-green-600  to-blue-600  fas fa-globe text-6xl mb-8"></i>
          <h3
            className="text-4xl uppercase mb-6 text-gray-900 font-bold tracking-wide"
            onMouseEnter={() => geographyPlay()}
            onMouseLeave={() => geographyStop()}
          >
            Geography
          </h3>
          <p
            className="text-xl"
            onMouseEnter={() => geographyTitlePlay()}
            onMouseLeave={() => geographyTitleStop()}
          >
            Exploring the unexplored, an unknown journey
          </p>
          <Link
            to="/books/geography"
            class="relative inline-block my-8 lg:mb-8 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500"
            onMouseEnter={() => ctaPlay()}
            onMouseLeave={() => ctaStop()}
          >
            Read Book
          </Link>
        </div>
      </div>

      <div className="text-center mx-auto my-5 w-1/3 bg-white p-6 rounded shadow-lg pt-16 pb-16 px-1  transform  hover:-translate-y-4 hover:shadow-xl transition duration-500 border-t-8  border-green-700">
        <i class="text-transparent bg-clip-text bg-gradient-to-r from-green-600  to-blue-600  fas fa-file-upload text-6xl mb-8"></i>
        <h3
          className="text-4xl uppercase mb-6 text-gray-900 font-bold tracking-wide"
          onMouseEnter={() => responsiveVoice.speak("Uploaded File")}
          onMouseLeave={() => responsiveVoice.cancel()}
        >
          Uploaded File
        </h3>
        <p
          className="text-xl"
          onMouseEnter={() =>
            responsiveVoice.speak("Listen to your uploaded file!")
          }
          onMouseLeave={() => responsiveVoice.cancel()}
        >
          Listen to your uploaded file!
        </p>
        <Link
          to="/file-upload"
          class="relative inline-block my-8 lg:mb-8 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500"
          onMouseEnter={() => responsiveVoice.speak("Uploaded File")}
          onMouseLeave={() => responsiveVoice.cancel()}
        >
          Uploaded File
        </Link>
      </div>
    </div>
  );
};

export default Books;
