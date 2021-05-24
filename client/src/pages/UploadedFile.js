import React, { useState, useEffect } from "react";
import Loading from "../components/Loader";

import PDF from "react-pdf-js";

const UploadedFile = ({ match }) => {
  const [fetchedFile, setFetchedFile] = useState();
  const fileId = match.params.fileId;

  useEffect(() => {
    async function fetchFile() {
      try {
        const data = await import(`./../uploads/uploadedFile-${fileId}.pdf`);
        setFetchedFile(data.default);
      } catch (error) {
        console.log(`No file found!`);
      }
    }
    fetchFile();
  }, []);

  if (!fetchedFile) return <Loading />;

  if (fetchedFile) {
    return (
      <div>
        <div className="text-center text-2xl mb-1">Uploaded File</div>
        <div
          style={{ height: "730px", width: "595px", margin: "0 auto" }}
          // onMouseEnter={() => responsiveVoice.speak(extractedText)}
          // onMouseLeave={() => responsiveVoice.cancel()}
        >
          <PDF
            className="border-2 border-blue-400 shadow-lg rounded-lg"
            file={fetchedFile}
            // page={page}
            // onDocumentComplete={onDocumentComplete}
          />
        </div>
        {/* {pagination} */}
      </div>
    );
  }
};

export default UploadedFile;
