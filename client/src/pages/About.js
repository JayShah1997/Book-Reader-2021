import React from "react";
import studentImage1 from "./../avatar/aniket.png";
import studentImage2 from "./../avatar/jayant.png";
import studentImage3 from "./../avatar/dipesh.png";
import professorImage from "./../avatar/professor.png";

const responsiveVoice = window.responsiveVoice;

const About = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <h1
        className="text-6xl text-center my-16 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-green-500"
        onMouseEnter={() => responsiveVoice.speak("About")}
        onMouseLeave={() => responsiveVoice.cancel()}
      >
        About
      </h1>

      <div className="flex items-center relative z-10">
        <div className="w-1/2 m-4 mx-16 text-gray-800 leading-relaxed">
          <div className="mb-4">
            <h3
              className="mb-2 text-4xl text-gray-700 font-bold tracking-wide"
              onMouseEnter={() => responsiveVoice.speak("Our Objective")}
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              Our Objective
            </h3>
            <p
              className="text-xl"
              onMouseEnter={() =>
                responsiveVoice.speak(`
              Our goal is to bridge the gaps the visually impaired students face
              to provide a solution which can make knowledge extraction and
              learning a fun process.
              `)
              }
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              Our goal is to bridge the gaps the visually impaired students face
              to provide a solution which can make knowledge extraction and
              learning a fun process.
            </p>
          </div>

          <div>
            <h3
              className="mb-2 text-4xl text-gray-700 font-bold tracking-wide"
              onMouseEnter={() => responsiveVoice.speak("How it works?")}
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              How it works?
            </h3>
            <p
              className="text-xl"
              onMouseEnter={() =>
                responsiveVoice.speak(`
              Students can select books and simply select a page to listen to
              the page of their choice. The app uses OCR with TTS technology,
              where data from the books are scanned and converted into audio
              format.
            `)
              }
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              Students can select books and simply select a page to listen to
              the page of their choice. The app uses OCR with TTS technology,
              where data from the books are scanned and converted into audio
              format.
            </p>
          </div>
        </div>

        <div className="m-4 border-4 p-2 border-green-300 rounded shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1610500795224-fb86b02926d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODZ8fHN0dWR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1
          className="text-6xl text-center my-16 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-green-500"
          onMouseEnter={() => responsiveVoice.speak("Meet the team")}
          onMouseLeave={() => responsiveVoice.cancel()}
        >
          Meet the team
        </h1>

        <div className="flex justify-center text-center">
          <div className="shadow-xl rounded-lg border-2 border-green-100 p-12 mb-4">
            <img src={professorImage} alt="" />
            <h4
              className="text-4xl mt-4 font-bold text-gray-800"
              onMouseEnter={() => responsiveVoice.speak("Ekta Ukey")}
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              Ekta Ukey
            </h4>
            <p
              className="text-xl mt-2"
              onMouseEnter={() => responsiveVoice.speak("Professor at PHCET")}
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              Professor at PHCET
            </p>
          </div>
        </div>

        <div className="mx-16 mt-8 flex justify-between">
          <div className="text-center shadow-xl rounded-lg border border-green-100 p-12">
            <img src={studentImage1} alt="" />
            <h4
              className="text-4xl mt-4 font-bold text-gray-800"
              onMouseEnter={() => responsiveVoice.speak("Aniket Shinde")}
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              Aniket Shinde
            </h4>
            <p
              className="text-xl mt-2"
              onMouseEnter={() =>
                responsiveVoice.speak("B.E Computer Engineering, PHCET")
              }
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              BE Computer Engineering, PHCET
            </p>
          </div>

          <div className="text-center shadow-xl rounded-lg border border-green-100 p-12">
            <img src={studentImage2} alt="" />
            <h4
              className="text-4xl mt-4 font-bold text-gray-800"
              onMouseEnter={() => responsiveVoice.speak("Jayant Shah")}
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              Jayant Shah
            </h4>
            <p
              className="text-xl mt-2"
              onMouseEnter={() =>
                responsiveVoice.speak("B.E Computer Engineering, PHCET")
              }
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              BE Computer Engineering, PHCET
            </p>
          </div>

          <div className="text-center shadow-xl rounded-lg border border-green-100 p-12">
            <img src={studentImage3} alt="" />
            <h4
              className="text-4xl mt-4 font-bold text-gray-800"
              onMouseEnter={() => responsiveVoice.speak("Dipesh Parab")}
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              Dipesh Parab
            </h4>
            <p
              className="text-xl mt-2"
              onMouseEnter={() =>
                responsiveVoice.speak("B.E Computer Engineering, PHCET")
              }
              onMouseLeave={() => responsiveVoice.cancel()}
            >
              BE Computer Engineering, PHCET
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
