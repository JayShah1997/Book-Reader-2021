import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";

import bookReaderAudio from "../audio/NavbarAudio/book-reader.mp3";
import homeAudio from "../audio/NavbarAudio/home.mp3";
import booksAudio from "../audio/NavbarAudio/books.mp3";
import uploadAudio from "../audio/NavbarAudio/upload.mp3";
import aboutAudio from "../audio/NavbarAudio/about.mp3";

const Navbar = () => {
  const [bookReaderPlay, { stop: bookReaderStop }] = useSound(bookReaderAudio);
  const [homePlay, { stop: homeStop }] = useSound(homeAudio);
  const [booksPlay, { stop: booksStop }] = useSound(booksAudio);
  const [uploadPlay, { stop: uploadStop }] = useSound(uploadAudio);
  const [aboutPlay, { stop: aboutStop }] = useSound(aboutAudio);

  return (
    <div className="flex justify-between items-center mt-2">
      <div class="absolute top-0 left-0 transform translate-y-4 ">
        <div class="hidden md:block absolute bg-gradient-to-br from-blue-200 to-blue-200 w-48 h-48 rounded-full opacity-50"></div>
        <div class="hidden md:block absolute ml-28 mt-24  bg-gradient-to-br from-purple-200 to-purple-200 w-48 h-48 rounded-full opacity-50"></div>
        <div class="hidden md:block absolute ml-24 -mt-4 bg-gradient-to-br from-red-200 to-red-200 w-48 h-48 rounded-full opacity-50"></div>
      </div>

      <h1 className="relative  text-3xl font-bold text-blue-500 uppercase">
        <Link
          to="/"
          className="inline-block text-3xl mr-2 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-green-500"
          onMouseEnter={() => bookReaderPlay()}
          onMouseLeave={() => bookReaderStop()}
        >
          <i class="fas fa-book"></i> Book Reader
        </Link>
      </h1>

      <ul className="flex space-x-4 text-gray-600 text-xl">
        <li className="hover:text-blue-600  transition duration-300 ">
          <Link
            to="/"
            onMouseEnter={() => homePlay()}
            onMouseLeave={() => homeStop()}
          >
            Home
          </Link>
        </li>
        <li className="hover:text-blue-600 transition duration-300">
          <Link
            to="/books"
            onMouseEnter={() => booksPlay()}
            onMouseLeave={() => booksStop()}
          >
            Books
          </Link>
        </li>
        <li className="hover:text-blue-600 transition duration-300">
          <Link
            to="/news"
            // onMouseEnter={() => uploadPlay()}
            // onMouseLeave={() => uploadStop()}
          >
            News
          </Link>
        </li>
        <li className="hover:text-blue-600 transition duration-300">
          <Link
            to="/about"
            onMouseEnter={() => aboutPlay()}
            onMouseLeave={() => aboutStop()}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
