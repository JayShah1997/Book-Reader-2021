import React, { Fragment, useState, useEffect } from "react";
import Message from "./Message";
import Progress from "./Progress";
import PDF from "react-pdf-js";
import axios from "axios";
import uploadedPdfFile from "./../uploads/uploadedFile.pdf";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);

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

  const clearFile = () => {
    setUploadedFile(null);
    setMessage(null);
    // setFilename(null);
    setUploadPercentage(0);
  }

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
          className="mr-4 focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r transition-all duration-300 ease-out"
          onClick={handleNext}
        >
          {" "}
          <i class="fas fa-arrow-circle-right"></i> Next
        </button>

        <button
          disabled={!uploadedFile}
          className="focus:outline-none bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r transition-all duration-300 ease-out"
          onClick={clearFile}
        >
           Clear File <i class="ml-1 fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    );
  };

  let pagination = null;

  if (pages) {
    pagination = renderPagination();
  }

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({
        fileName,
        filePath,
      });
      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  if (uploadedFile) {
    return (
      <div>
        <div className="text-center mb-1">
          <span className="">Uploaded File</span> - Page{" "}
          <span className="">{page}</span> of <span className="">{pages}</span>
        </div>
        <div style={{ height: "730px", width: "595px", margin: "0 auto" }}>
          <PDF
            className="border-2 border-blue-400 shadow-lg rounded-lg"
            file={uploadedPdfFile}
            page={page}
            onDocumentComplete={onDocumentComplete}
          />
        </div>
        {pagination}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center" style={{ height: "80vh" }}>
        <h2 className="text-4xl mb-4 text-center">Upload File</h2>
        {message ? <Message msg={message} /> : null}
        <form onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename.slice(0, 25)}
            </label>
          </div>
          {/* <Progress percentage={uploadPercentage} /> */}
          <input
            type="submit"
            value="Upload File"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    );
  }
};

export default FileUpload;