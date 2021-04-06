import React from "react";
import useSound from "use-sound";

import footerAudio from "../audio/HomeAudio/footerAudio.mp3";

const Footer = () => {
  const [footerPlay, { stop: footerStop }] = useSound(footerAudio);

  return (
    <div className="relative mt-4 h-12 flex justify-center items-center">
      <p
        className="text-center text-gray-700 text-xl  hover:text-gray-900 transition duration-300"
        onMouseEnter={() => footerPlay()}
        onMouseLeave={() => footerStop()}
      >
        Made with ❤️ by students for students
      </p>
    </div>
  );
};

export default Footer;
