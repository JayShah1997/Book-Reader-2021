import React from "react";
// import useSound from "use-sound";
import { Link } from "react-router-dom";

// import bookReaderAudio from "../audio/NavbarAudio/book-reader.mp3";
// import titleAudio from "../audio/HomeAudio/titleAudio.mp3";
// import ctaAudio from "../audio/HomeAudio/ctaAudio.mp3";

const responsiveVoice = window.responsiveVoice;

const Hero = () => {
  // const [bookReaderPlay, { stop: bookReaderStop }] = useSound(bookReaderAudio);
  // const [titlePlay, { stop: titleStop }] = useSound(titleAudio);
  // const [ctaPlay, { stop: ctaStop }] = useSound(ctaAudio);

  return (
    <div
      className="mt-24 flex flex-col justify-center items-center"
      style={{ minHeight: "70vh" }}
    >
      <h1
        className="relative text-6xl mb-6 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-green-500"
        onMouseEnter={() => responsiveVoice.speak("Book Reader")}
        onMouseLeave={() => responsiveVoice.cancel()}
      >
        <i class="fas fa-book"></i> Book Reader
      </h1>

      <p
        className="relative text-2xl uppercase tracking-wider font-bold text-gray-700 mb-6"
        onMouseEnter={() =>
          responsiveVoice.speak("Education is a gift every kid deserves")
        }
        onMouseLeave={() => responsiveVoice.cancel()}
      >
        Education is a gift every kid deserves ✨
      </p>

      <Link
        to="/books"
        class="relative inline-block mb-16 lg:mb-8 py-3 px-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 text-purple-100 hover:text-white hover:to-purple-600 shadow-lg hover:shadow-2xl font-bold text-lg tracking-wide transition duration-500"
        onMouseEnter={() => responsiveVoice.speak("Discover all books")}
        onMouseLeave={() => responsiveVoice.cancel()}
      >
        Discover All Books
      </Link>
    </div>
  );
};

export default Hero;
